import { Route } from "react-router-dom";
import { RouteConfig } from "./types";
import { ROUTE } from "./routes";

export const generateRoutes = (routes: RouteConfig[]): React.ReactNode[] => {
  return routes.map(({ id, element }) => (
    <Route key={id} path={ROUTE[id]} element={element} />
  ));
};
