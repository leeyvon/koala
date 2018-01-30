/**
 * 整合所有子路由
 */
const router = require('koa-router')();
const users = require('./users');

router.use('/users', users.routes(), users.allowedMethods())

module.exports = router
