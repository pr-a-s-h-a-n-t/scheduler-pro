import { lazy } from "react";
export const LazyLanding = lazy(() =>
  import("../pages/landingPage/MainLanding.jsx")
);
export const LazyLogin = lazy(() => import("../pages/auth/Login.jsx"));
export const LazySignUp = lazy(() => import("../pages/auth/SignUp.jsx"));
