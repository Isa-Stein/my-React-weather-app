import React from "react";
import "./Background.css";

export default function Background(load, date) {
  if (load) {
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
    let dateobj = new Date(date);
    let currentHour = dateobj.getHours();

    if (currentHour >= 0 && currentHour <= 5) {
      return (
        <div className="background">
          <img
            src="./Night.png"
            className="card-image-bottom"
            alt="Time of Day Visual"
          />{" "}
        </div>
      );
    } /* else {
      if (currentHour >= 6 && currentHour <= 11) {
        return (
          <div className="background">
            <img
              src="./Sunrie.png"
              className="card-image-bottom"
              alt="Time of Day Visual"
            />
          </div>
        );
      } else {
        if (currentHour >= 12 && currentHour <= 17) {
          return (
            <div className="background">
              <img
                src="./DayTime.png"
                className="card-image-bottom"
                alt="Time of Day Visual"
              />
            </div>
          );
        } else {
          if (currentHour >= 18 && currentHour <= 23) {
            return (
              <div className="background">
                <img
                  src="./Sunset.png"
                  className="card-image-bottom"
                  alt="Time of Day Visual"
                />
              </div>
            );
          }
        }
      }
    } */
  }
}
