const router = require("express").Router();
const asyncRouteFn = require("../../utils/asyncRouteFn");
const accountController = require("../controllers/accountController");

router.post("/signin", asyncRouteFn(accountController.signIn));
router.post("/signup", asyncRouteFn(accountController.signUp));

module.exports = router;
