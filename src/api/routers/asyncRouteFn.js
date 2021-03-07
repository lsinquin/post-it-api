/**
 * Wraps router callback functions or middleware functions to be able to used await inside them without the need of a try...catch block.
 * @param {*} fn router callback function or middleware's function.
 */
module.exports = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (e) {
    //Go to the Error Middleware if an Error was not managed
    next(e);
  }
};
