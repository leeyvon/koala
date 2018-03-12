const jwt = require('jsonwebtoken');

// 生成token
function createToken(user) {
    const token = jwt.sign({
        id: user._id,
        name: user.name
    }, 'liyuanfeng', {
        expiresIn: 60*60
    })
    return token
}

// 检查并更新token
async function checkToken(ctx, next) {
    if(ctx.request.header['authorization']){
        let token = ctx.request.header['authorization'].split(' ')[1];
        //解码token
        let decoded = jwt.decode(token, 'liyuanfeng');
        let tokenContent
        try{
            tokenContent = await jwt.verify(token, 'liyuanfeng')
        }catch(err){
            ctx.status = 401;
            if (err.name === 'TokenExpiredError') {
                console.log(123)
                ctx.body = {
                    message: 'token过期'
                };
            }
            ctx.body = {
                message: '没有token'
            }
        }
        return await next();
    }
}

module.exports = {
    createToken: createToken,
    checkToken: checkToken
}