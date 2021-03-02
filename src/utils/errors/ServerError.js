class ServerError extends Error {
  constructor(
    errorId = "err_unknown",
    message = "Une erreur innatendu a eu lieu",
    statusCode = 500
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorId = errorId;
    this.name = "ServerError";
  }
}

module.exports = ServerError;
