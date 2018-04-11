let User = require("./../models/user");
const base = require("./../token");
const jwt = require("jsonwebtoken");

async function seed() {
  let user = await User.find().exec().catch(err => {
    throw new Error('Data seed failed');
  });
  if (!user.length){
    user = new User({
      name: 'leeyvon',
      username: 'leeyvon',
      password: 'lyf123456',
      avatar: '',
      createTime: new Date()
    })
    console.log('成功');
    await user.save().exec().catch(err => {
      utils.logger.error(err)
      throw new Error('Data seed failed')
    })
  }
}

seed();

module.exports = {
  async login(ctx, next) {
    const { username, password } = ctx.request.body;
    try {
      let user = await User.findOne({ username });
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        ctx.body = {
          status: "1",
          msg: "用户名或密码错误"
        };
        return;
      }
      let token = base.createToken(user);
      user.token = token;
      ctx.body = {
        status: "0",
        msg: "登陆成功！",
        username,
        token
      };
    } catch (error) {
      ctx.throw(error);
    }
  }
};
