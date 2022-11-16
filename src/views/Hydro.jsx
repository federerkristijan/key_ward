import React from "react";

import Water from "../assets/images/water_planet.png";

const Hydro = () => {
  return (
    <div className="Hydro">
      <img
        src={Water}
        alt="water"
        style={{
          width: "80px",
          height: "80px",
          marginBottom: "3.5rem",
          position: "relative",
          left: "320px",
          top: "20px"
        }}
      />
    </div>
  );
};

export default Hydro;
