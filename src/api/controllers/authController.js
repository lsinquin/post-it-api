import { logIn } from "../../services/authService";

async function signIn(req, res) {
  const { mail, password } = req.body;

  const token = await logIn(mail, password);

  res.json({ token: token });
}

export { signIn };
