import React, { useState } from "react";
import axios from "axios";
import "./Weatherapp.css";
import Forecast from "./Forecast.js";
import Background from "./Background.js";

import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ loaded: false });
  const [input, setInput] = useState(props.defaultCity);

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=14b4ec50bfdac6afc3e3c9dd658e26fe&units=metric`;
    axios.get(apiUrl).then(getData);
    console.log(apiUrl);
  }

  function manageSearch(event) {
    event.preventDefault();
    search();
  }

  function logInput(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  function getData(response) {
    setweatherData({
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
      date: response.data.dt * 1000,
      img: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      imgDesc: response.data.weather[0].description,
    });
  }

  function sendCurrentCity(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lat);
    console.log(long);
    let apiKey = "14b4ec50bfdac6afc3e3c9dd658e26fe";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(getData);
  }

  function getCurrentCity(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(sendCurrentCity);
    console.log(navigator.geolocation);
  }

  let form = (
    <div>
      <form className="form" onSubmit={manageSearch}>
        <input
          type="search"
          className="form-control"
          placeholder="Enter a city to search"
          autoFocus="on"
          autoComplete="off"
          onChange={logInput}
        />
        <input type="submit" className="btn btn-outline-info" value="Search" />
      </form>
      <form className="current-city">
        <input
          starts
          type="submit"
          className="btn btn-outline-info"
          value="Current City"
          onClick={getCurrentCity}
        />
      </form>
    </div>
  );

  if (weatherData.loaded) {
    return (
      <div className="container">
        <header>
          <WeatherInfo data={weatherData} />
        </header>
        <main>
          {form}
          <br />
          <Forecast city="response.data.name" />
        </main>
        <footer>
          <div className="row">
            <Background load={weatherData.loaded} info={weatherData.date} />
          </div>
        </footer>
      </div>
    );
  } else {
    search();
    return (
      <div className="container">
        <div className="row pre-load">
          <p>
            {" "}
            Loading weather information ....
            <br /> Please wait...
          </p>
        </div>
        {form}
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <Background load={weatherData.loaded} info={weatherData.date} />
        </div>
      </div>
    );
  }
}
