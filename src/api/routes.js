import { readFileSync } from "fs";
import express from "express";
import swaggerUi from "swagger-ui-express";
import yaml from "js-yaml";
import cors from "cors";
import authRouter from "./routers/authRouter";
import userRouter from "./routers/userRouter";
import noteRouter from "./routers/noteRouter";

import { errorMiddleware } from "./middlewares/errorMiddleware";

function initRoutes(app) {
  const apiDocumentation = yaml.load(
    readFileSync("./api_documentation.yaml", "utf8")
  );

  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => res.redirect("/docs"));

  var swaggerOptions = {
    customCss: ".swagger-ui .topbar { display: none }",
  };

  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(apiDocumentation, swaggerOptions)
  );

  app.use("/api/users", userRouter);

  app.use("/api/notes", noteRouter);

  app.use("/api", authRouter);

  app.use(errorMiddleware);
}

export { initRoutes };
