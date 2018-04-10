const router = require("koa-router")();
const controller = require("./../controllers/archieves");

const routers = router
  .get("/", controller.getList)

module.exports = routers;