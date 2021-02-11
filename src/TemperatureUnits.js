import { React, useState } from "react";

export default function TemperatureUnits(props) {
  let [convertTemp, setconvertTemp] = useState(Math.round(props.temperature));

  function showCelsius(event) {
    event.preventDefault();
    setconvertTemp(Math.round(props.temperature));
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setconvertTemp(Math.round(((props.temperature * 9) / 5) * 5));
  }

  return (
    <div>
      Current Temperature: {convertTemp}
      <span className="tempUnits">
        <a href="/" className="celsius-link active" onClick={showCelsius}>
          °C
        </a>{" "}
        |{" "}
        <a href="/" className="fahrenheit-link" onClick={showFahrenheit}>
          °F
        </a>
      </span>
    </div>
  );
}
