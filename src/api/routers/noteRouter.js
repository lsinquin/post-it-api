import express from "express";
import asyncRouteFn from "./asyncRouteFn";
import {
  getUserNotes,
  getNote,
  putNote,
  deleteNote,
  postNote,
} from "../controllers/noteController";
import { jwtMiddleware } from "../middlewares/jwtMiddleware";

const router = express.Router();

router.use("/", jwtMiddleware);

router.get("/", asyncRouteFn(getUserNotes));
router.post("/", asyncRouteFn(postNote));

router.get("/:id", asyncRouteFn(getNote));
router.delete("/:id", asyncRouteFn(deleteNote));
router.put("/:id", asyncRouteFn(putNote));

export { router };
export default router;
