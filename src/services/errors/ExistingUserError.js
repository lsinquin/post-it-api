import BusinessError from "./BusinessError";

class ExistingUserError extends BusinessError {
  constructor() {
    super("Un compte existe déjà pour cette adresse mail");
    this.name = "ExistingUserError";
  }
}

export { ExistingUserError };
export default ExistingUserError;
