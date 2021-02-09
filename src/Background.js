import React from "react";
import "./Background.css";

export default function Background(load) {
  if ((load = false)) {
    return (
      <div>
        <img
          src="./DayTime.png"
          className="card-image-bottom"
          alt="Time of Day Visual"
        />
      </div>
    );
  } else {
    return (
      <div className="background">
        <img
          src="./DayTime.png"
          className="card-image-bottom"
          alt="Time of Day Visual"
        />
      </div>
    );
  }
}
