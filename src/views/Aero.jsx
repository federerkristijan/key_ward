import React from "react";

import Air from "../assets/images/gas_giant.png";

const Aero = () => {
  return (
    <div className="Aero">
      <img src={Air} alt="aero" style={{ width: "80px", height: "80px", marginBottom: "2.5rem", position: "relative", right: "190px", bottom: "250px" }} />
    </div>
  );
};

export default Aero;
