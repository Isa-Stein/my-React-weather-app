import React, { useState } from "react";
import axios from "axios";
import DisplayForecast from "./DisplayForecast.js";

export default function Forecast(props) {
  const [forecastData, setForecastData] = useState({ loaded: false });
  let lat = props.latitude;
  let lon = props.longitude;

  function showForecast(response) {
    console.log(response);
    setForecastData({
      loaded: true,
      latitude: response.data.lat,
      /* day1: response.data.daily[0],
      day2: response.data.daily[1],
      day3: response.data.daily[2],
      day4: response.data.daily[3],
      day5: response.data.daily[4], */
      day1: response.data.list[0],
      day2: response.data.list[1],
      day3: response.data.list[2],
      day4: response.data.list[3],
      day5: response.data.list[4],
    });
    console.log(forecastData.latitude);
  }

  if (forecastData.loaded && props.lat === forecastData.latitude) {
    return (
      <div className="row">
        <div className="col-2">
          <DisplayForecast data={forecastData.day1} />
        </div>
        <div className="col-2">
          <DisplayForecast data={forecastData.day2} />
        </div>
        <div className="col-2">
          <DisplayForecast data={forecastData.day3} />
        </div>
        <div className="col-2">
          <DisplayForecast data={forecastData.day4} />
        </div>
        <div className="col-2">
          <DisplayForecast data={forecastData.day5} />
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=14b4ec50bfdac6afc3e3c9dd658e26fe&units=metric`;
    /*  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=14b4ec50bfdac6afc3e3c9dd658e26fe&units=metric`; */
    axios.get(apiUrl).then(showForecast);
    console.log(apiUrl);
    return <div> Loading Forecast...</div>;
  }
}
