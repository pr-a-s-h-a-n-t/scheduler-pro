import { lazy } from "react";
export const LazyLanding = lazy(() =>
  import("../pages/landingPage/MainLanding.jsx")
);
export const LazyLogin = lazy(() => import("../pages/auth//login/Login.jsx"));
export const LazySignUp = lazy(() => import("../pages/auth/signup/SignUp.jsx"));
