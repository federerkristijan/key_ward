import React from "react";
// creadits to https://www.npmjs.com/package/react-planet/v/1.0.1
import { Planet } from "react-planet";
import Aero from "../views/Aero";
import Center from "../views/Center";
import Hydro from "../views/Hydro";



const Planets = () => {
  return (
    <Planet
      centerContent={<Center/>}
      orbitRadius={120}
      hideOrbit={false}
      autoClose
      rotation={105}
    >
      <Hydro />
      <Aero />
      {/* <div
        style={{
          height: 70,
          width: 70,
          borderRadius: "50%",
          backgroundColor: "#9257ad",
          margin: "2rem",
        }}
      /> */}
      {/* <div
        style={{
          height: 90,
          width: 80,
          borderRadius: "80%",
          background: "bisque",
          margin: "2rem",
        }}
      /> */}
    </Planet>
  );
};

export default Planets;
