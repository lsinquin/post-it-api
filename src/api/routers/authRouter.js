const router = require("express").Router();
const asyncRouteFn = require("./asyncRouteFn");
const authController = require("../controllers/authController");
const {
  signInValidator,
} = require("../middlewares/validatorMiddlewares/accountValidatorMiddleware");

router.post(
  "/signin",
  asyncRouteFn(signInValidator),
  asyncRouteFn(authController.signIn)
);

module.exports = router;
