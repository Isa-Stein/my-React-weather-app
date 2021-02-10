import React from "react";
import "./Background.css";

export default function Background(load, date) {
  let dateobj = new Date(date);
  let currentHour = dateobj.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

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
      /* if  (hour is between 00 and 06 == Sunrise)*/
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
