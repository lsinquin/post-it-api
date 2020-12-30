const express = require("express");
const cors = require("cors");

const accountRouter = require("./routers/accountRouter");
const noteRouter = require("./routers/noteRouter");

const errorMiddleware = require("./middlewares/errorMiddleware");

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => res.redirect("/api"));

  app.get("/api", (req, res) => res.send("Welcome to the Post-It API"));

  app.use("/api/notes", noteRouter);

  app.use("/api", accountRouter);

  app.use(errorMiddleware);
};
