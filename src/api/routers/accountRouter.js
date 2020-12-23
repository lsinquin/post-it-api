const router = require("express").Router();
const wrapRoute = require("../../utils/wrapRoute");
const accountController = require("../controllers/accountController");

router.post("/login", wrapRoute(accountController.login));
router.post("/accounts", wrapRoute(accountController.addOne));

module.exports = router;
