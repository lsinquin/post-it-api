const authService = require("../../services/authService");

exports.signIn = async (req, res) => {
  const { mail, password } = req.body;

  const token = await authService.signIn(mail, password);

  res.json({ token: token });
};
