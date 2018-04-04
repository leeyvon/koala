var mongoose = require("mongoose");

const draftSchema = new mongoose.Schema({
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
  published: Boolean,
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post"
  },
  excerpt:String
});

module.exports = mongoose.model("draft", draftSchema);
