const router = require("express").Router();
const asyncRouteFn = require("./asyncRouteFn");
const accountController = require("../controllers/accountController");

router.post("/", asyncRouteFn(accountController.postAccount));

module.exports = router;
