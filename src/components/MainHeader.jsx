import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkout</h4>
          <h1>Join The Legends of the Fitness World</h1>
          <p>
            Step into a world of unparalleled fitness excellence and embrace the opportunity to join
            the legends of the fitness realm. At Gymfinity, we offer more than just workouts; we
            provide a transformative experience where passion, dedication, and innovation converge.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="MainHeaderImage" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
