import { RouteProps } from "react-router-dom";
import { Home, About, Challenge } from "./pages";

interface IRoute extends RouteProps {
  component: React.FunctionComponent<any>;
}

export const routes: IRoute[] = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/challenge/:id/:something",
    component: Challenge,
    exact: true,
  },
];
