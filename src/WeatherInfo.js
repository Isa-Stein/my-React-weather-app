import React from "react";
import TemperatureUnits from "./TemperatureUnits";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      {" "}
      <div className="row post-load">
        <div className="col-8">
          <h1>{props.data.city}</h1>
          <h2>
            <TemperatureUnits temperature={props.data.temperature} />
            Wind Speed: {props.data.windSpeed} <span> km/h </span>
            <br />
            Humidity : {props.data.humidity} %
            <br />
            <FormattedDate date={props.data.date} />
          </h2>
        </div>

        <div className="col-4">
          <img
            src={props.data.img}
            alt={props.data.imgDesc}
            className="mainIcon"
          />
          <span className="weather-description">{props.data.imgDesc}</span>
        </div>
      </div>
    </div>
  );
}
