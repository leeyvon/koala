const router = require('koa-router')()
const controller = require('./../controllers/users');

const routers = router
  .post('/',controller.getUser)

module.exports = routers
