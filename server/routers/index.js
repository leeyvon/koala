/**
 * 整合所有子路由
 */
const router = require("koa-router")();
const users = require("./users");
const drafts = require("./drafts");
const publication = require("./publication");
const posts = require('./posts');
const archieve = require('./archieve');

router.prefix("/api");

router.use("/users", users.routes(), users.allowedMethods());
router.use("/drafts", drafts.routes(), drafts.allowedMethods());
router.use("/publication", publication.routes(), publication.allowedMethods());
router.use("/posts", posts.routes(), posts.allowedMethods());
router.use("/archieve", archieve.routes(), archieve.allowedMethods());

module.exports = router;
