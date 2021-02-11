import { React, useState } from "react";

export default function TemperatureUnits(props) {
  let [units, setUnits] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  if (units === "celsius") {
    return (
      <div>
        Current Temperature: {Math.round(props.temperature)}
        <span className="tempUnits">
          {" "}
          °C |{" "}
          <a href="/" className="fahrenheit-link" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round(((props.temperature * 9) / 5) * 5);
    return (
      <div>
        Current Temperature: {fahrenheit}{" "}
        <span className="tempUnits">
          <a href="/" className="celsius-link active" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
