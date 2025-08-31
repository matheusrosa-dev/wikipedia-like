import { IEntity } from "../../../shared/interfaces/index.ts";
import { OpaqueToken, Uuid } from "../../../shared/value-objects/index.ts";
import * as yup from "yup";
import { InvalidSession } from "./errors/index.ts";

type Props = {
  id: Uuid;
  userId: Uuid;
  token: OpaqueToken;
  refreshToken: OpaqueToken;
  expiresAt: Date;
  createdAt: Date;
};

export class Session implements IEntity {
  id: Uuid;
  userId: Uuid;
  token: OpaqueToken;
  refreshToken: OpaqueToken;
  expiresAt: Date;
  createdAt: Date;

  constructor(props: Props) {
    this.id = props.id;
    this.userId = props.userId;
    this.token = props.token;
    this.refreshToken = props.refreshToken;
    this.expiresAt = props.expiresAt;
    this.createdAt = props.createdAt;
  }

  async validate() {
    const schema = yup
      .object({
        expiresAt: yup.date().required(),
        createdAt: yup.date().required(),
      })
      .strict();

    try {
      await schema.validate({
        expiresAt: this.expiresAt,
        createdAt: this.createdAt,
      });
    } catch {
      throw new InvalidSession();
    }
  }

  toJSON(): object {
    return {
      id: this.id.id,
      userId: this.userId.id,
      token: this.token.token,
      refreshToken: this.refreshToken.token,
      expiresAt: this.expiresAt,
      createdAt: this.createdAt,
    };
  }
}
