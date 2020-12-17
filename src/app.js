require("dotenv").config();
const express = require("express");

const initRoutes = require("./api/routes");

const app = express();
initRoutes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
