import BusinessError from "./BusinessError";

class UserNotFoundError extends BusinessError {
  constructor() {
    super("Aucun compte n'existe pour cette adresse mail");
    this.name = "UserNotFoundError";
  }
}

export { UserNotFoundError };
export default UserNotFoundError;
