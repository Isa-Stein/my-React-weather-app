import React from "react";

export default function TemperatureUnits(props) {
  function showCelsius(event) {
    event.preventDefault();
    props.setUnits("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnits("celsius");
  }

  if (props.units === "celsius") {
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
