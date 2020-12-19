module.exports = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (e) {
    //Go to the Error Middleware if an Error was not managed
    next(e);
  }
};
