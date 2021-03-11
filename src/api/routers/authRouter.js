import express from "express";
import asyncRouteFn from "./asyncRouteFn";
import { signIn } from "../controllers/authController";
import { signInValidator } from "../middlewares/validatorMiddlewares/accountValidatorMiddleware";

const router = express.Router();

router.post("/signin", asyncRouteFn(signInValidator), asyncRouteFn(signIn));

export { router };
export default router;
