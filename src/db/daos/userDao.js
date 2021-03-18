import { query } from "../dbConnection";

async function findUserByMail(mail) {
  const {
    rows: [user],
  } = await query("SELECT * FROM app_user WHERE mail = $1", [mail]);

  return user;
}

async function insertUser(mail, password) {
  const {
    rows: [insertedUser],
  } = await query(
    "INSERT INTO app_user(mail, password) VALUES ($1, $2) RETURNING id, mail",
    [mail, password]
  );

  return insertedUser;
}

export { findUserByMail, insertUser };
