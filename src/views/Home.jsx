import React from 'react'
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
        <img src={Air} alt='air'/>
      </div>
      <div className="car">
        <img src={Car} alt='car'/>
      </div>
      <div className="DNA">
        <img src={DNA} alt='DNA'/>
      </div>
      <div className="ship">
        <img src={Ship} alt='ship'/>
      </div>
      <div className="wind">
        <img src={Wind} alt='wind'/>
      </div>
    </div>
  );
};

export default Home;
