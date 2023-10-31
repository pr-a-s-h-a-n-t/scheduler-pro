import { LazyLanding, LazySideBar, LazyLogin, LazySignUp } from "./LazyNav.js";
import { Routes, Route } from "react-router-dom";

const CentralNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<LazyLanding />} />
      <Route path="/login" element={<LazyLogin />} />
      <Route path="/signup" element={<LazySignUp />} />
      <Route path="/sidebar" element={<LazySideBar />} />
    </Routes>
  );
};

export default CentralNavigation;
