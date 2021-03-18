import express from "express";
import asyncRouteFn from "./asyncRouteFn";
import { postUser } from "../controllers/userController";

const router = express.Router();

router.post("/", asyncRouteFn(postUser));

export { router };
export default router;
