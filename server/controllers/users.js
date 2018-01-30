let User = require('./../models/user');
const base = require('./../token');
const jwt = require('jsonwebtoken')

module.exports = {
    async login(ctx, next) {
        const {username, password} = ctx.request.body;
        try {
            let user = await User.findOne({username});
            const isMatch = await user.comparePassword(password);
            if(!isMatch) {
                ctx.body = {
                    status: '1',
                    msg: '用户名或密码错误'
                }
                return
            }
            let token = base.createToken(user);
            user.token = token;
            console.log(token)
            console.log(jwt.decode(token,'leeyvon'))
            await user.save().catch(err =>{
                throw new Error('token saved failed');
            })
            ctx.body = {
                status: '0',
                msg: '登陆成功！',
                username,
                token
            }

        } catch (error) {
            ctx.throw(error)
        }
    }
}