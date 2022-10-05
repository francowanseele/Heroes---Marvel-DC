import { authReducer, types } from "../../../src/auth";

describe("Test authReducer", () => {
  test("Should return state by default.", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("Should call login auth and set user.", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Franco",
        id: "123",
      },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("Should delete user name and set logged in false (logout).", () => {
    const state = {
      logged: true,
      user: { id: "123", name: "Franco" },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);
    expect(newState).toEqual({ logged: false });
  });
});
