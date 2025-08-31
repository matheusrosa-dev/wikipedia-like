import { DomainError } from "../../../../shared/classes";

export class InvalidSession extends DomainError {
  constructor() {
    super({ message: "Invalid session", statusCode: 400 });
  }
}
