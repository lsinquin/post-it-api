const router = require("express").Router();
const asyncRouteFn = require("../../utils/asyncRouteFn");
const noteController = require("../controllers/noteController");
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");
const jwtMiddleware = require("../middlewares/jwtMiddleware");

router.use("/", jwtMiddleware);
router.use("/:id", asyncRouteFn(authorizationMiddleware));

router.get("/", asyncRouteFn(noteController.getAccountNotes));
router.get("/:id", noteController.getNote);
router.put("/:id", asyncRouteFn(noteController.updateNote));
router.delete("/:id", asyncRouteFn(noteController.deleteNote));
router.post("/", asyncRouteFn(noteController.postNote));

module.exports = router;
