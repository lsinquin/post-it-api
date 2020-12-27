const router = require("express").Router();
const wrapRoute = require("../../utils/wrapRoute");
const noteController = require("../controllers/noteController");

router.get("/", wrapRoute(noteController.getAllNotes));
router.get("/:id", wrapRoute(noteController.getNote));
router.put("/:id", wrapRoute(noteController.modifyNote));
router.delete("/:id", wrapRoute(noteController.deleteNote));
router.post("/", wrapRoute(noteController.postNote));

module.exports = router;
