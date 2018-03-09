const router = require('koa-router')()
const controller = require('./../controllers/publication');
const token = require('./../token');

const routers = router
  .post('/', controller.publish)

module.exports = routers