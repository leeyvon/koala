var mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  imageSrc: String,
  createTime: {
    type: Date
  },
  lastEditTime: {
    type: Date,
    default: Date.now
  },
  content: String,
  excerpt: String
});

module.exports = mongoose.model("post", postSchema);
