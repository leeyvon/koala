let Post = require("./../models/post");

module.exports = {
  async postList(ctx, next) {
    let findOpt = {};
    const draftArr = await Post.find(findOpt)
      .sort("_id")
      .exec();
    ctx.body = {
      success: true,
      data: draftArr.reverse()
    };
  },
  async postDetail(ctx, next) {
    const id = ctx.params.id;
    let post = await Post.findById(id)
      .exec()
      .catch(err => {
        throw new Error("Post get failed");
      });
    ctx.body = {
      success: true,
      data: post
    };
  }
};
