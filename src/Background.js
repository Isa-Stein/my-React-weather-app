import React from "react";
import "./Background.css";

export default function Background(load, info) {
  console.log(info);
  let dateobj = new Date(info);
  let currentHour = dateobj.getHours();
  console.log(currentHour);

  if (load && currentHour >= 0 && currentHour <= 5) {
    return (
      <div className="background">
        <img
          src="./Night.png"
          className="card-image-bottom"
          alt="Time of Day Visual"
        />{" "}
      </div>
    );
  } else if (load && currentHour >= 6 && currentHour <= 11) {
    return (
      <div className="background">
        <img
          src="./Sunrise.png"
          className="card-image-bottom"
          alt="Time of Day Visual"
        />
      </div>
    );
  } else if (load && currentHour >= 12 && currentHour <= 17) {
    return (
      <div className="background">
        <img
          src="./DayTime.png"
          className="card-image-bottom"
          alt="Time of Day Visual"
        />
      </div>
    );
  } else if (load && currentHour >= 18 && currentHour <= 23) {
    return (
      <div className="background">
        <img
          src="./Sunset.png"
          className="card-image-bottom"
          alt="Time of Day Visual"
        />
      </div>
    );
  } else {
    return (
      <div>
        <img
          src="./DayTime.png"
          className="card-image-bottom"
          alt="Time of Day Visual"
        />
      </div>
    );
  }
}
