import bcrypt from "bcrypt";
import { runInTransaction } from "../db/runInTransaction";
import { findUserByMail, insertUser } from "../db/daos/userDao";
import ExistingUserError from "./errors/ExistingUserError";

const BCRYPT_ROUNDS = 10;

async function createUser(mail, password) {
  return runInTransaction(async () => {
    const user = await findUserByMail(mail);

    if (user) {
      throw new ExistingUserError();
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

    return insertUser(mail, hashedPassword);
  });
}

export { createUser };
