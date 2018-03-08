const router = require('koa-router')()
const controller = require('./../controllers/drafts');
const token = require('./../token');

const routers = router
  .post('/', controller.create)
  .patch('/:id', controller.modify)
  .get('/', controller.draftList)
  .get('/:id', controller.draftDetail)
  .delete('/:id', controller.deleteDraft)

module.exports = routers