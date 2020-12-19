require("dotenv").config();
const morgan = require("morgan");
const express = require("express");

const initRoutes = require("./api/routes");

const app = express();

app.use(morgan("tiny"));

initRoutes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
