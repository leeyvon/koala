const router = require("koa-router")();
const controller = require("./../controllers/publication");
const token = require("./../token");

const routers = router
    .post("/", token.checkToken, controller.publish)
    .delete("/:id", token.checkToken, controller.deletePub);

module.exports = routers;
