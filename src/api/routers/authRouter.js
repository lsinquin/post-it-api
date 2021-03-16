import express from "express";
import asyncRouteFn from "./asyncRouteFn";
import { signIn } from "../controllers/authController";

const router = express.Router();

router.post("/signin", asyncRouteFn(signIn));

export { router };
export default router;
