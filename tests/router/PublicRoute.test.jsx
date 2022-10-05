import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe("Test <PublicRoute />", () => {
  test("Should show children if not auth.", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Public Route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Public Route")).toBeTruthy();
  });

  test("Should navigate if user is auth.", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Franco",
        id: "ABC123",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          {/*Current route -> I am in /login*/}
          <Routes>
            {/* 
              * I have to set two routes: /login and /marvel because PublicRoute redirect 
              * to /marvel if user is logged
            */}
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Public Route</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Marvel Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Marvel Page")).toBeTruthy();
  });
});
