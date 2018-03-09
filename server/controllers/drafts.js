let Draft = require('./../models/draft');
let Post = require('./../models/post');
const base = require('./../token');

module.exports = {
    async create(ctx, next) {
        const { title, imageSrc, content } = ctx.request.body;
        const createTime = new Date();
        const lastEditTime = new Date();
        const published = false;
        const post = null;
        !title && ctx.throw(400, 'Title Required');
        let draft = new Draft({
            title,
            createTime,
            lastEditTime,
            published,
            content,
            imageSrc,
            post
        });
        await draft.save().catch(err => {
            throw new Error('token saved failed');
        })
        ctx.body = {
            success: true,
            data: draft
        }
    },
    async modify(ctx, next) {
        const id = ctx.params.id;
        const {modifyOpt} = ctx.request.body;
        if(modifyOpt.content) {
            const contentArr = modifyOpt.content.split('<!-- more -->');
            modifyOpt.excerpt = contentArr.length > 1 ? contentArr[0] : '';
        }
        modifyOpt.lastEditTime = new Date();
        modifyOpt.published = false;
        let result = await Draft.findByIdAndUpdate(id, {$set: modifyOpt}, {new: true}).exec().catch(err =>{
            throw new Error('modify draft failed');
        })
        ctx.body = {
            success: true,
            data: result
        }
    },
    async draftList(ctx, next) {
        let findOpt = {};
        const draftArr = await Draft.find(findOpt).sort('_id').exec();
        ctx.body = {
            success: true,
            data: draftArr.reverse()
        }
    },
    async draftDetail(ctx, next) {
        const id = ctx.params.id;
        let draft = await Draft.findById(id).exec().catch(err => {
            throw new Error('draft get failed');
        })
        ctx.body = {
            success: true,
            data: draft
        }
    },
    async deleteDraft(ctx, next) {
        const id = ctx.params.id;
        const draft = await Draft.findById(id).exec().catch(err=> {
            throw new Error('draft get failed');
        })
        !draft && ctx.throw(400, 'draft not exist');
        await draft.remove().catch(err=> {
            throw new Error('draft delete failed');
        })
        if(draft.post){
        await Post.remove({_id:draft.post}).catch(err=>{
                throw new Error('already post saved failed');
            })
        }
        ctx.body = {
            success: true
        }
    }
}