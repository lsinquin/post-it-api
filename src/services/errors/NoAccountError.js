import BusinessError from "./BusinessError";

class NoAccountError extends BusinessError {
  constructor() {
    super("Aucun compte n'existe pour cette adresse mail");
    this.name = "NoAccountError";
  }
}

export { NoAccountError };
export default NoAccountError;
