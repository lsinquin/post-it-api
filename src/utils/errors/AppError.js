class AppError extends Error {
  constructor(...params) {
    super(...params);
  }
}

module.exports = AppError;
