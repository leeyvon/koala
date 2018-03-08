let Draft = require('./../models/draft');
const base = require('./../token');
const moment = require('moment');
const timezone = 'Asia/Shanghai';

module.exports = {
    async create(ctx, next) {
        const { title, imageSrc, content } = ctx.request.body;
        console.log(imageSrc)
        const createTime = new Date();
        const lastEditTime = new Date();
        const published = false;
        !title && ctx.throw(400, 'Title Required');
        let draft = new Draft({
            title,
            createTime,
            lastEditTime,
            published,
            content,
            imageSrc
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
        
    },
    async draftList(ctx, next) {
        let findOpt = {};
        const draftArr = await Draft.find(findOpt).exec();
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
        const draftArr = await Draft.find({}).exec();
        ctx.body = {
            success: true,
            data: draftArr
        }
    }
}