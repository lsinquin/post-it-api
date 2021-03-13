import "dotenv/config";
import morgan from "morgan";
import express from "express";
import { initRoutes } from "./api/routes";

if (!process.env.DATABASE_URL) {
  console.error(
    new Error("Missing mandatory DATABASE_URL environment variable")
  );
  process.exit(1);
}

if (!process.env.JWT_SECRET) {
  console.log(new Error("Missing mandatory JWT_SECRET environment variable"));
  process.exit(1);
}

const app = express();

app.use(morgan("tiny"));

initRoutes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
