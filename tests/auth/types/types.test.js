import { types } from "../../../src/auth/types/types";

describe('Test "Types.js"', () => {
  test("Should return types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
