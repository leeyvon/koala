const router = require('koa-router')()
const controller = require('./../controllers/drafts');
const token = require('./../token');

const routers = router
  .post('/',token.checkToken, controller.create)
  .patch('/:id',token.checkToken, controller.modify)
  .get('/',token.checkToken, controller.draftList)
  .get('/:id',token.checkToken, controller.draftDetail)
  .delete('/:id',token.checkToken, controller.deleteDraft)

module.exports = routers