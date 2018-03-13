var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  avatar: String,
  createTime: String,
  token: String
});

userSchema.methods.comparePassword = async function(password) {
  if (password === this.password) {
    return true;
  }
  return false;
};

module.exports = mongoose.model("User", userSchema);
