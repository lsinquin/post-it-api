class BusinessError extends Error {
  constructor(message = "The process couldn't proceed") {
    super(message);
    this.name = "BusinessError";
  }
}

module.exports = BusinessError;
