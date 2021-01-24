import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [temp, setTemp] = useState("null");

  function getTemp(response) {
    setTemp(response.data.main.temp);
  }

  if (temp === "null") {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=14b4ec50bfdac6afc3e3c9dd658e26fe&units=metric`;
    axios.get(apiUrl).then(getTemp);
    return <p> Looking for temperature </p>;
  } else {
    return (
      <p>
        Welcome to the Web-app to discover what the weather is like in{" "}
        {props.city} <br />
        Temperature : {Math.round(temp)} °C
      </p>
    );
  }
}
