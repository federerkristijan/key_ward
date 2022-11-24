import React from 'react'
// import AnimatedCursor from '../components/AnimatedCursor/AnimatedCursor';

import Air from "../assets/Icons/Airplane";
import Car from "../assets/Icons/Car";
import DNA from "../assets/Icons/DNA_1.png";
import Ship from "../assets/Icons/ship.png";
import Wind from "../assets/Icons/wind.png";

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
