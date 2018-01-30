const jwt = require('jsonwebtoken');

// 生成token
function createToken(user) {
    const token = jwt.sign({
        id: user._id,
        name: user.name
    }, 'leeyvon', {
        expiresIn: Math.floor(Date.now()/1000) + 24 * 60 * 60 //过期时间设置为60妙。那么decode这个token的时候得到的过期时间为 : 创建token的时间 +　设置的值
    })
    return token
}

// 检查并更新token
async function checkToken(ctx, next) {
    if(ctx.request.header['authorization']){
        let token = ctx.request.header['authorization'].split(' ')[1];
        //解码token
        let decoded = jwt.decode(token, 'leeyvon');
        if(token && decoded.exp <= new Date()/1000){
            ctx.status = 401;
            ctx.body = {
                message: 'token过期'
            };
        }else{
            return next();
        }
    }else{
        ctx.status = 401;
        ctx.body = {
            message: '没有token'
        }
    }
}

module.exports = {
    createToken: createToken,
    checkToken: checkToken
}