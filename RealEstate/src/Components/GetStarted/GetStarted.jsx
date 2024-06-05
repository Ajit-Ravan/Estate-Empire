import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div className="g-wrapper">
      <div className="paddings innerWidth  g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Real Estate</span>
          <span className="secondaryText">
            Subscribe and find the attractive quotes from us
            <br />
            Find your property soon
          </span>
          <button className="button">
            <a href="mailto:ravanajit110@gmail.com" className="">
              Get Started
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
