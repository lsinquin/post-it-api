import BusinessError from "./BusinessError";

class WrongCredentialsError extends BusinessError {
  constructor() {
    super("Les identifiants indiqués ne sont pas corrects");
    this.name = "WrongCredentialsError";
  }
}

export { WrongCredentialsError };
export default WrongCredentialsError;
