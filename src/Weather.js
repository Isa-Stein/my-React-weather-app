import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [temp, setTemp] = useState("null");
  const [input, setInput] = useState("null");
  const [city, setCity] = useState("null");

  function manageSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=14b4ec50bfdac6afc3e3c9dd658e26fe&units=metric`;
    axios.get(apiUrl).then(getData);
  }

  function logInput(event) {
    setInput(event.target.value);
  }

  function getData(response) {
    console.log(response);
    setTemp(Math.round(response.data.main.temp));
    setCity(response.data.name);
  }

  if (temp === "null") {
    return (
      <div>
        To retrieve temperature please enter a city
        <form onSubmit={manageSearch}>
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city to search"
            autoFocus="on"
            onChange={logInput}
          />
          <input
            type="submit"
            className="btn btn-outline-info"
            value="Search"
          />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          Displaying information for: {city}
          <br />
          Temperature: {temp} <a href="/"> °C </a> <a href="/">°F </a>
        </p>
        <form onSubmit={manageSearch}>
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city to search"
            autoFocus="on"
            onChange={logInput}
          />
          <input
            type="submit"
            className="btn btn-outline-info"
            value="Search"
          />
        </form>
      </div>
    );
  }
}
