import React from "react";
import "./MainLanding.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { isAuth } from "../../utils/isAuth.js";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigateUser = useNavigate();

  const handleBtnClick = () => {
    //check  if user is logged in or not if yes redirect to dashboard or make him logged in
    if (isAuth()) navigateUser("/dashboard");
    else navigateUser("/login");
  };

  return (
    <div className="hero">
      <h1>Effortless</h1>
      <h1>Task Scheduling with</h1>
      <h1>Scheduler Pro</h1>
      <div>
        <button onClick={() => handleBtnClick()} className="btn-grad">
          Schedule Now <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Hero;
