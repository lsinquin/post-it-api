import dotenv from "dotenv";
import morgan from "morgan";
import express from "express";
import { initRoutes } from "./api/routes";

dotenv.config();

const app = express();

app.use(morgan("tiny"));

initRoutes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
