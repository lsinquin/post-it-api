const cors = require("cors");

const userRouter = require("./routers/userRouter");
const noteRouter = require("./routers/noteRouter");

module.exports = function initRoutes(app) {
  app.use(cors());

  app.get("/", (req, res) => res.redirect("/api"));

  app.get("/api", (req, res) => res.send("Welcome to the Post-It API"));

  app.use("/api/notes", noteRouter);
  app.use("/api", userRouter);
};
