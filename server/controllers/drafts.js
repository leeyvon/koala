let Draft = require('./../models/draft');
const base = require('./../token');
const moment = require('moment');
const timezone = 'Asia/Shanghai';

module.exports = {
    async create(ctx, next) {
        const { title, imageSrc, content } = ctx.request.body;
        const createTime = new Date();
        const lastEditTime = new Date();
        const published = false;
        !title && ctx.throw(400, 'Title Required');
        let draft = new Draft({
            title,
            createTime,
            lastEditTime,
            published,
            content
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
            data: draftArr
        }
    },
    async draftDetail(ctx, next) {
    
    },
    async deleteDraft(ctx, next) {
    
    }
}