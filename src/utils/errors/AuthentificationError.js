const AppError = require("./AppError");

class ExistingAccountError extends AppError {
  constructor(...params) {
    super(...params);
  }
}

module.exports = ExistingAccountError;
