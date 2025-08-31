import { DomainError } from "../classes";
import { validateOpaqueToken } from "../utils";
import { ValueObject } from "./value-object";
import crypto from "crypto";

export class OpaqueTokenInvalidError extends DomainError {
  constructor() {
    super({
      message: "Opaque token is invalid",
      statusCode: 400,
    });
  }
}

export class OpaqueToken extends ValueObject {
  readonly token: string;

  constructor(token?: string) {
    super();
    this.token = token || crypto.randomBytes(32).toString("hex");
    this.validate();
  }

  validate() {
    const isValid = validateOpaqueToken(this.token);

    if (!isValid) {
      throw new OpaqueTokenInvalidError();
    }
  }
}
