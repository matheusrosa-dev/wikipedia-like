import { DomainError } from "../../../../shared/classes/index.ts";

export class InvalidSession extends DomainError {
  constructor() {
    super({ message: "Invalid session", statusCode: 400 });
  }
}
