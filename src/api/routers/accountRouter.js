const router = require("express").Router();
const wrapRoute = require("../../utils/wrapRoute");
const accountController = require("../controllers/accountController");

router.post("/signin", wrapRoute(accountController.signIn));
router.post("/signup", wrapRoute(accountController.signUp));

module.exports = router;
