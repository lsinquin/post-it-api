import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByMail } from "../db/daos/userDao";
import WrongCredentialsError from "./errors/WrongCredentialsError";
import UserNotFoundError from "./errors/UserNotFoundError";

async function logIn(mail, password) {
  const user = await findUserByMail(mail);

  if (!user) {
    throw new UserNotFoundError();
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new WrongCredentialsError();
  }

  return generateAccessToken(user.id, user.mail);
}

function generateAccessToken(id, mail) {
  return jwt.sign(
    {
      userId: id,
      mail: mail,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
}

export { logIn };
