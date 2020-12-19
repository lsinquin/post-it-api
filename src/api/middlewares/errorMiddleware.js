module.exports = (error, req, res, next) => {
  console.error(error);
  res.status(500).send({ message: "Unfortunate things happened" });
};
