import express from "express";
import cors from "cors";
import authRouter from "./routers/authRouter";
import accountRouter from "./routers/accountRouter";
import noteRouter from "./routers/noteRouter";

import { errorMiddleware } from "./middlewares/errorMiddleware";

function initRoutes(app) {
  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => res.redirect("/api"));

  app.get("/api", (req, res) => res.send("Welcome to the Post-It API"));

  app.use("/api/notes", noteRouter);

  app.use("/api/accounts", accountRouter);

  app.use("/api", authRouter);

  app.use(errorMiddleware);
}

export { initRoutes };
