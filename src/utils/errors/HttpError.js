class HttpError extends Error {
  constructor(
    message = "Une erreur inconnue a eu lieu",
    code = "err_unknown",
    statusCode = 500
  ) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.name = "HttpError";
  }
}

module.exports = HttpError;
