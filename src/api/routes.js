import express from "express";
import cors from "cors";
import authRouter from "./routers/authRouter";
import userRouter from "./routers/userRouter";
import noteRouter from "./routers/noteRouter";

import { errorMiddleware } from "./middlewares/errorMiddleware";

function initRoutes(app) {
  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => res.redirect("/api"));

  app.get("/api", (req, res) => res.send("Welcome to the Post-It API"));

  app.use("/api/notes", noteRouter);

  app.use("/api/users", userRouter);

  app.use("/api", authRouter);

  app.use(errorMiddleware);
}

export { initRoutes };
