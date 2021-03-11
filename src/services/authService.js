import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getAccountByMail } from "../db/daos/accountDao";
import WrongCredentialsError from "./errors/WrongCredentialsError";
import NoAccountError from "./errors/NoAccountError";

async function logIn(mail, password) {
  const account = await getAccountByMail(mail);

  if (!account) {
    throw new NoAccountError();
  }

  const isPasswordCorrect = await bcrypt.compare(password, account.password);

  if (!isPasswordCorrect) {
    throw new WrongCredentialsError();
  }

  return generateAccessToken(account.id, account.mail);
}

function generateAccessToken(id, mail) {
  return jwt.sign(
    {
      accountId: id,
      mail: mail,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
}

export { logIn };
