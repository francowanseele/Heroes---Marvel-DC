import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute>
              {/* <LoginPage /> */}
              <Routes>
                <Route path="/*" element={<LoginPage />} />
                {/* <Route path="/otra-ruta" element={<LoginPage />} /> 
                  * Hacerlo de esta forma permite establecer varias rutas publicas dentro de login
                  * ej: /login, /login/otra-ruta, etc..
                */}
              </Routes>
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
