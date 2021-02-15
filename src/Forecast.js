import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  const [forecastData, setForecastData] = useState({ loaded: false });
  let lat = props.latitude;
  let lon = props.longitude;

  function getForecast() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=14b4ec50bfdac6afc3e3c9dd658e26fe&units=metric`;
    axios.get(apiUrl).then(showForecast);
    console.log(apiUrl);
  }

  function showForecast(response) {
    console.log(response);
    setForecastData({
      loaded: true,
      date: new Date(response.data.daily[0].dt * 1000),
      max: response.data.daily[0].temp.max,
      min: response.data.daily[0].temp.min,
      icon: response.data.daily[0].weather[0].icon,
    });
    console.log(forecastData.date);
  }

  if (forecastData.loaded && props.lat === forecastData.lat) {
    return (
      <div className="row">
        <div className="col-3">
          <br /> Min/ Max <br /> Icon <br /> Hello There
        </div>
        <div className="col-3">
          Min/ Max <br /> Icon <br /> Hello There
        </div>
        <div className="col-3">
          Min/ Max <br /> Icon <br /> Hello There
        </div>
        <div className="col-3">
          Min/ Max <br /> Icon <br /> Hello There
        </div>
      </div>
    );
  } else {
    getForecast();
    return <div> Loading Forecast...</div>;
  }
}
