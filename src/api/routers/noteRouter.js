const router = require("express").Router();
const wrapRoute = require("../../utils/wrapRoute");
const noteController = require("../controllers/noteController");

router.get("/", wrapRoute(noteController.getAll));
router.get("/:id", wrapRoute(noteController.getOne));
router.put("/:id", wrapRoute(noteController.modifyOne));
router.delete("/:id", wrapRoute(noteController.deleteOne));
router.post("/", wrapRoute(noteController.addOne));

module.exports = router;
