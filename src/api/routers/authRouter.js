const router = require("express").Router();
const asyncRouteFn = require("./asyncRouteFn");
const authController = require("../controllers/authController");

router.post("/signin", asyncRouteFn(authController.signIn));

module.exports = router;
