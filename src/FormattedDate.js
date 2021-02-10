import React from "react";

export default function FormattedDate(props) {
  let dateobj = new Date(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDay = days[dateobj.getDay()];

  let currentHour = dateobj.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = dateobj.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let currentTime = `${currentHour}:${currentMinutes}`;

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentDay = dateobj.getDate();
  let currentMonth = months[dateobj.getMonth()];
  let currentYear = dateobj.getFullYear();
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

  return (
    <div>
      {weekDay}, {currentDay}
      {descriptor} {currentMonth} {currentYear}
      <br />
      Last update: {currentTime}
    </div>
  );
}
