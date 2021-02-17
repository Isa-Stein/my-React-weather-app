import React from "react";
import "./DisplayForecast.css";

export default function DisplayForecast(props) {
  console.log(props);
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

  let max = Math.round(props.data.temp.max);
  let min = Math.round(props.data.temp.min);
  let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  let imgDesc = props.data.weather[0].description;

  return (
    <div className="forecast">
      <p className="forecastText">
        {weekDay}, {currentDay}
        {descriptor} {""}
        {currentMonth} <br />
        <span className="forecastTemp">
          {min} / <strong> {max}</strong> °C | °F
        </span>
        <img height="90" src={icon} alt={imgDesc} />
      </p>
    </div>
  );
}
