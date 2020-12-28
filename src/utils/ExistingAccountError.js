class ExistingAccountError extends Error {
  constructor(...params) {
    super(...params);
  }
}

module.exports = ExistingAccountError;
