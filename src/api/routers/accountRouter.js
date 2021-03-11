const router = require("express").Router();
const asyncRouteFn = require("./asyncRouteFn");
const accountController = require("../controllers/accountController");
const {
  postAccountValidator,
} = require("../middlewares/validatorMiddlewares/accountValidatorMiddleware");

router.post(
  "/",
  asyncRouteFn(postAccountValidator),
  asyncRouteFn(accountController.postAccount)
);

module.exports = router;
