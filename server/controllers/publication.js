let Draft = require("./../models/draft");
let Post = require("./../models/post");
const base = require("./../token");

module.exports = {
  async publish(ctx, next) {
    const id = ctx.request.body.id;
    let draft = await Draft.findById(id)
      .exec()
      .catch(err => {
        throw new Error("draft get failed");
      });
    if (!draft.title.length || !draft.content.length) {
      ctx.throw(400, "title, content required");
    }
    draft.published = true;
    draft.lastEditTime = new Date();
    let postObj = draft.toObject();
    let post;
    if (draft.post) {
      delete postObj.createTime;
      post = await Post.findByIdAndUpdate(
        draft.post,
        { $set: postObj },
        { new: true }
      )
        .exec()
        .catch(err => {
          throw new Error("already post saved failed");
        });
    } else {
      postObj.createTime = postObj.lastEditTime;
      delete postObj.lastEditTime;
      post = await new Post(postObj).save().catch(err => {
        throw new Error("post saved failed");
      });
      draft.post = post.id;
    }
    draft.save().catch(err => {
      throw new Error("draft saved failed");
    });
    ctx.body = {
      success: true,
      data: post
    };
  },

  async deletePub(ctx, next) {
    const id = ctx.params.id;
    let draft = await Draft.findById(id)
      .exec()
      .catch(err => {
        throw new Error("draft get failed");
      });
    await Post.remove({ _id: draft.post }).catch(err => {
      throw new Error("already post saved failed");
    });
    draft.published = false;
    draft.lastEditTime = new Date();
    draft.post = undefined; //删除post字段
    draft.save().catch(err => {
      throw new Error("draft saved failed");
    });
    ctx.body = {
      success: true
    };
  }
};
