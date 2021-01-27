import React, { useState } from "react";
import axios from "axios";
import "./Weatherapp.css";
import Forecast from "./Forecast.js";
import Background from "./Background.js";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState("null");
  const [loaded, setLoaded] = useState(false);
  const [input, setInput] = useState("null");

  function manageSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=14b4ec50bfdac6afc3e3c9dd658e26fe&units=metric`;
    axios.get(apiUrl).then(getData);
  }

  function logInput(event) {
    setLoaded(true);
    setInput(event.target.value);
  }

  function getData(response) {
    setweatherData({
      city: response.data.name,
      tem: Math.round(response.data.main.temp),
    });
  }

  let form = (
    <form onSubmit={manageSearch}>
      <input
        type="search"
        className="form-control"
        placeholder="Enter a city to search"
        autoFocus="on"
        onChange={logInput}
      />
      <input type="submit" className="btn btn-outline-info" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        <div className="row">
          <Background />
        </div>
        <div className="row">
          <p>
            Displaying information for: {weatherData.city}
            <br />
            Temperature: {weatherData.temp} <a href="/"> °C </a>{" "}
            <a href="/">°F </a>
          </p>
          <div className="row">{form}</div>
          <div className="row">
            <Forecast />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <Background />
        <br />
        <p> To retrieve temperature please enter a city </p>
        {form}
      </div>
    );
  }
}
