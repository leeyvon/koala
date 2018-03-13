const router = require("koa-router")();
const controller = require("./../controllers/users");
const token = require("./../token");

const routers = router.post("/", controller.login);

module.exports = routers;
