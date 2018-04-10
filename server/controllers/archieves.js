let Post = require("./../models/post");
const moment = require('moment');
const _ = require('lodash')

module.exports = {
  async getList(ctx, next) {
    let findOpt = {};
    const postsArr = await Post.find(findOpt)
      .sort("_id")
      .select({_id:1,title:1,lastEditTime:1})
      .exec();
    let groupByYear  =  _.groupBy(postsArr.reverse(), post => moment(post.lastEditTime).format('Y'));
    for(let i in groupByYear){
      groupByYear[i] =  _.groupBy(groupByYear[i].reverse(), post => moment(post.lastEditTime).format('M'))
    }
    ctx.body = {
    success: true,
    data: groupByYear
    };
  }
};
