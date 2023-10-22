import React from "react";
import "./MainLanding.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Effortless</h1>
      <h1>Task Scheduling with</h1>
      <h1>Scheduler Pro</h1>
      <div>
        <button className="btn-grad">
          Schedule Now <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Hero;
