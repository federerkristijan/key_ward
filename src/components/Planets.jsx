import React from "react";
// creadits to https://www.npmjs.com/package/react-planet/v/1.0.1
import { Planet } from "react-planet";

// import Center from "../views/Center";
// import Hydro from "../views/Hydro";
// import Aero from "../views/Aero";

const Planets = () => {
  return (
    <Planet
      centerContent={
        <div
          style={{
            height: 100,
            width: 100,
            borderRadius: "50%",
            backgroundColor: "#1da8a4",
          }}
        />
      }
      hideOrbit
      autoClose
      orbitRadius={60}
      bounceOnClose
      rotation={105}
      bounceDirection="BOTTOM"
    >
      {/* <Hydro />
      <Aero />
      <div /> */}
      <div
        style={{
          height: 70,
          width: 70,
          borderRadius: "50%",
          backgroundColor: "#9257ad",
        }}
      />
      <div
        style={{
          height: 70,
          width: 70,
          borderRadius: "50%",
          backgroundColor: "#9257ad",
        }}
      />
    </Planet>
  );
};

export default Planets;
