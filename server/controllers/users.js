let User = require('./../models/user');

module.exports = {
    async getUser(ctx, next) {
        let param = {
            username:ctx.request.body.username,
            password:ctx.request.body.password
        }
        try {
            let userInfo = await User.findOne(param).exec();
            ctx.body = {
                test:userInfo
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}