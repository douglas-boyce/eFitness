import React from "react";
import "./style.css";

function Hero(props) {
  console.log(props)
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Hero;
