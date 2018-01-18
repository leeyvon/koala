var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    avatar: String,
    createTime: String
});

module.exports = mongoose.model('User',userSchema);