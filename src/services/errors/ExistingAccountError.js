import BusinessError from "./BusinessError";

class ExistingAccountError extends BusinessError {
  constructor() {
    super("Un compte existe déjà pour cette adresse mail");
    this.name = "ExistingAccountError";
  }
}

export { ExistingAccountError };
export default ExistingAccountError;
