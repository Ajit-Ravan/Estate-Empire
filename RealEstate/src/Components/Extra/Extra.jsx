import React from "react";
import "./Extra.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

function Extra() {
  return (
    <section className="extra-wrapper">
      <div className="paddings innerWidth flexCenter extra-container">
        <div className="flextColStart extra-left">
          <div className="extra-title">
            <div className="blue-circle"></div>
            <h1>
              Discover <br /> Most Perfect <br /> Property
            </h1>
          </div>
          <div className="flexColStart extra-des">
            <span className="secondaryText">
              Find beautiful properties that suites you best
            </span>
            <span className="secondaryText">
              You will not face any difficulties in finding the best residence
              for you
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="cyan" size={25}></HiLocationMarker>
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={3589} end={9000} duration={2} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Properties</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={90} duration={2} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={10} end={25} duration={2} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnning</span>
            </div>
          </div>
        </div>
        <div className="flexCenter extra-right">
          <div className="image-container">
            <img src="download2.jpg" alt="main image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Extra;
