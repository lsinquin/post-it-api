const router = require("express").Router();
const wrapRoute = require("../../utils/wrapRoute");
const userController = require("../controllers/userController");

router.post("/login", wrapRoute(userController.login));
router.post("/users", wrapRoute(userController.addOne));

module.exports = router;
