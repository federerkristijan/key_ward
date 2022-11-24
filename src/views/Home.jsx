import React from "react";
// import AnimatedCursor from '../components/AnimatedCursor/AnimatedCursor';

import Air from "../assets/icons/airplane.png";
import Car from "../assets/icons/Car";
import DNA from "../assets/icons/dna.png";
import Ship from "../assets/icons/boat.png";
import Wind from "../assets/icons/wind.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="air">
        <a href="/air">
          <img src={Air} alt="air" />
        </a>
      </div>
      <div className="car">
        <a href="/car">
          <img src={Car} alt="car" />
        </a>
      </div>
      <div className="DNA">
        <a href="/dna">
          <img src={DNA} alt="DNA" />
        </a>
      </div>
      <div className="ship">
        <a href="ship">
          <img src={Ship} alt="ship" />
        </a>
      </div>
      <div className="wind">
        <a href="wind">
          <img src={Wind} alt="wind" />
        </a>
      </div>
    </div>
  );
};

export default Home;
