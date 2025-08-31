import { validateOpaqueToken } from "../../utils/index.ts";
import { OpaqueToken, OpaqueTokenInvalidError } from "../index.ts";

describe("Opaque Token Unit Tests", () => {
  const validateSpy = jest.spyOn(OpaqueToken.prototype, "validate");

  it("Should create a valid token", () => {
    const opaqueToken = new OpaqueToken();
    expect(validateOpaqueToken(opaqueToken.token)).toBe(true);

    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  it("Should throw an error when token is invalid", () => {
    expect(() => new OpaqueToken("invalid-token")).toThrow(
      new OpaqueTokenInvalidError()
    );

    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  it("Should accept a valid token", () => {
    const providedToken =
      "34a2d8803adee445fda388df800b1a95dee4ee15a021e99e63de04e1edb4d5b0";

    const opaqueToken = new OpaqueToken(providedToken);
    expect(opaqueToken.token).toBe(providedToken);
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });
});
