import React, { useState } from "react";
import axios from "axios";
import "./Weatherapp.css";
import Forecast from "./Forecast.js";
import Background from "./Background.js";
import TemperatureUnits from "./TemperatureUnits";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weatherData, setweatherData] = useState("null");
  const [loaded, setLoaded] = useState(false);
  const [input, setInput] = useState("Florence");

  function manageSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=14b4ec50bfdac6afc3e3c9dd658e26fe&units=metric`;
    axios.get(apiUrl).then(getData);
    console.log(apiUrl);
  }

  function logInput(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  function getData(response) {
    setLoaded(true);
    console.log(response);
    setweatherData({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      img: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      imgDesc: response.data.weather[0].description,
    });
  }

  let form = (
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
      <input
        starts
        type="submit"
        className="btn btn-outline-info"
        value="Current City"
      />
    </form>
  );

  if (loaded) {
    return (
      <div className="container">
        <header>
          <div className="row post-load">
            <div className="col-8">
              <h1>{weatherData.city}</h1>
              <h2>
                Current Temperature: {weatherData.temperature}{" "}
                <TemperatureUnits />
                <br />
                Wind Speed: {weatherData.windSpeed} <span> m/s </span>
                <br />
                Humidity : {weatherData.humidity} %
                <br />
                <FormattedDate date={weatherData.date} />
              </h2>
            </div>

            <div className="col-4">
              <img
                src={weatherData.img}
                alt={weatherData.imgDesc}
                className="mainIcon"
              />
              <span className="weather-description">{weatherData.imgDesc}</span>
            </div>
          </div>
        </header>
        <main>
          {form}
          <br />
          <div className="row">
            <div className="col-3">
              <Forecast />
            </div>
            <div className="col-3">
              <Forecast />
            </div>
            <div className="col-3">
              <Forecast />
            </div>
            <div className="col-3">
              <Forecast />
            </div>
          </div>
        </main>
        <footer>
          <div className="row">
            <Background load={loaded} />
          </div>
        </footer>
      </div>
    );
  } else {
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
          <Background />
        </div>
      </div>
    );
  }
}
