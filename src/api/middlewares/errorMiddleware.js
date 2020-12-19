const winston = require("winston/lib/winston/config");
const logger = require("../../utils/logger");

module.exports = (error, req, res, next) => {
  console.log(error);
  res.status(500).send({ message: "An unexpected error occured" });
};
