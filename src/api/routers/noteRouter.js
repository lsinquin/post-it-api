const router = require("express").Router();
const noteController = require("../controllers/noteController");

router.get("/", noteController.getAll);
router.get("/:id", noteController.getOne);
router.put("/:id", noteController.modifyOne);
router.delete("/:id", noteController.deleteOne);
router.post("/", noteController.addOne);

module.exports = router;
