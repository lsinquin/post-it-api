import express from "express";
import asyncRouteFn from "./asyncRouteFn";
import {
  getAccountNotes,
  getNote,
  putNote,
  deleteNote,
  postNote,
} from "../controllers/noteController";
import { jwtMiddleware } from "../middlewares/jwtMiddleware";

const router = express.Router();

router.use("/", jwtMiddleware);

router.get("/", asyncRouteFn(getAccountNotes));
router.get("/:id", getNote);
router.delete("/:id", asyncRouteFn(deleteNote));
router.put("/:id", asyncRouteFn(putNote));
router.post("/", asyncRouteFn(postNote));

export { router };
export default router;
