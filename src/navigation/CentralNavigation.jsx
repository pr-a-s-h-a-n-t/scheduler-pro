import { createBrowserRouter } from "react-router-dom";
import { LazyLanding, LazyLogin, LazySignUp } from "./LazyNav.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyLanding />,
  },
  {
    path: "/login",
    element: <LazyLogin />,
  },
  {
    path: "/signup",
    element: <LazySignUp />,
  },
]);
