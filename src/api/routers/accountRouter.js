import express from "express";
import asyncRouteFn from "./asyncRouteFn";
import { postAccount } from "../controllers/accountController";

const router = express.Router();

router.post("/", asyncRouteFn(postAccount));

export { router };
export default router;
