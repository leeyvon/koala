/**
 * 整合所有子路由
 */
const router = require('koa-router')();
const users = require('./users');
const drafts = require('./drafts');

router.prefix('/api');

router.use('/users', users.routes(), users.allowedMethods())
router.use('/drafts', drafts.routes(), drafts.allowedMethods())

module.exports = router
