import { Uuid, OpaqueToken } from "../../../../shared/value-objects";
import { Session } from "../session";

describe("Session Unit Tests", () => {
  it("Should instance a valid session", () => {
    const session = new Session({
      createdAt: new Date(),
      expiresAt: new Date(),
      id: new Uuid(),
      refreshToken: new OpaqueToken(),
      token: new OpaqueToken(),
      userId: new Uuid(),
    });

    session.validate();
  });
});
