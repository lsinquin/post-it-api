import express from "express";
import asyncRouteFn from "./asyncRouteFn";
import { postAccount } from "../controllers/accountController";
import { postAccountValidator } from "../middlewares/validatorMiddlewares/accountValidatorMiddleware";

const router = express.Router();

router.post("/", asyncRouteFn(postAccountValidator), asyncRouteFn(postAccount));

export { router };
export default router;
