import React from "react";
import "./DisplayForecast.css";

export default function DisplayForecast(props) {
  console.log(props);

  function formatDate() {
    let dateobj = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let weekDay = days[dateobj.getDay()];

    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let currentDay = dateobj.getDate();
    let currentMonth = months[dateobj.getMonth()];
    let descriptor = "th";

    if (currentDay === 1) {
      descriptor = "st";
    } else {
      if (currentDay === 2) {
        descriptor = "nd";
      } else {
        if (currentDay === 3) {
          descriptor = "rd";
        } else {
          descriptor = "th";
        }
      }
    }

    let currentHour = dateobj.getHours();
    if (currentHour < 10) {
      currentHour = `0${currentHour}`;
    }
    let currentMinutes = dateobj.getMinutes();
    if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`;
    }
    let currentTime = `${currentHour}:${currentMinutes}`;
    return `${weekDay}, ${currentDay}
     ${descriptor} 
     ${currentMonth} <br />
     ${currentTime}`;
  }

  let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  let imgDesc = props.data.weather[0].description;

  if (props.units === "celsius") {
    let max = Math.round(props.data.temp.max);
    let min = Math.round(props.data.temp.min);
    return (
      <div className="forecast col-2">
        <p className="forecastText">
          {formatDate()}
          <span className="forecastTemp">
            {" "}
            {min} / <strong> {max}</strong>°C
          </span>
          <img height="90" src={icon} alt={imgDesc} />
        </p>
      </div>
    );
  } else {
    let max = Math.round((props.data.temp.max * 9) / 5 + 32);
    let min = Math.round((props.data.temp.min * 9) / 5 + 32);
    return (
      <div className="forecast col-2">
        <p className="forecastText">
          {formatDate()}
          <span className="forecastTemp">
            {" "}
            {min} / <strong> {max}</strong>°F
          </span>
          <img height="90" src={icon} alt={imgDesc} />
        </p>
      </div>
    );
  }
}
