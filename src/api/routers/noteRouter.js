const router = require("express").Router();
const asyncRouteFn = require("./asyncRouteFn");
const noteController = require("../controllers/noteController");
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");
const jwtMiddleware = require("../middlewares/jwtMiddleware");
const noteValidatorMiddleware = require("../middlewares/validatorMiddlewares/noteValidatorMiddleware");

router.use("/", jwtMiddleware);
router.use("/:id", asyncRouteFn(authorizationMiddleware));

router.get("/", asyncRouteFn(noteController.getAccountNotes));
router.get("/:id", noteController.getNote);
router.delete("/:id", asyncRouteFn(noteController.deleteNote));
router.put(
  "/:id",
  asyncRouteFn(noteValidatorMiddleware),
  asyncRouteFn(noteController.updateNote)
);
router.post(
  "/",
  asyncRouteFn(noteValidatorMiddleware),
  asyncRouteFn(noteController.postNote)
);

module.exports = router;
