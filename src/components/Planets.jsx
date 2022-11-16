import React from "react";
// creadits to https://www.npmjs.com/package/react-planet/v/1.0.1
import { Planet } from "react-planet";

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
      orbitRadius={120}
      hideOrbit={false}
      autoClose
      rotation={105}
      bounceOnClose
      bounceDirection="BOTTOM"
    >
      <div
        style={{
          height: 70,
          width: 70,
          borderRadius: "50%",
          backgroundColor: "#9257ad",
          margin: "2rem",
        }}
      />
      <div
        style={{
          height: 70,
          width: 70,
          borderRadius: "80%",
          background: "bisque",
          margin: "2rem",
        }}
      />
    </Planet>
  );
};

export default Planets;
