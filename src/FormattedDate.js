import React from "react";

export default function FormattedDate(props) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
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

  let month = months[props.getMonth()];
  let day = weekdays[props.getday()];
  let dayDescription = "th";
  if (day === 1) {
    dayDescription = "st";
  } else {
    if (day === 2) {
      dayDescription = "nd";
    } else {
      if (day === 3) {
        dayDescription = "rd";
      } else {
        dayDescription = "th";
      }
    }
  }
  let year = props.getFullYear();
  let hour = props.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let currentMinutes = now.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  let timeStamp = `${hour}:${currentMinutes}`;

  return (
    <div>
      Today it is the {day}
      {dayDescription} of {month} {year}
      <br />
      Last update: {timeStamp}
    </div>
  );
}
