const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/login", userController.login);
router.post("/users", userController.addOne);

module.exports = router;
