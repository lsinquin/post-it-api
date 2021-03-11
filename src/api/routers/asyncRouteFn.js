/**
 * Wraps router callback functions or middleware functions to be able to used await inside them without the need of a try...catch block.
 * @param {*} fn router callback function or middleware's function.
 */
function asyncRouteFn(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

export { asyncRouteFn };
export default asyncRouteFn;
