const router = require("koa-router")();
const controller = require("./../controllers/posts");

const routers = router
  .get("/", controller.postList)
  .get("/:id", controller.postDetail)

module.exports = routers;
