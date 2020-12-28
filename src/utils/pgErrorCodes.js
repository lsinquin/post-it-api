/*
PostgreSQL errors are standardized. The exhaustive list of all errors can be found here : https://www.postgresql.org/docs/12/errcodes-appendix.html
This object gather the error codes used in some capacity in this project.
*/
const errorCodes = {
  UNIQUE_VIOLATION_CODE: "23505",
};

module.exports = errorCodes;
