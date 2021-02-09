import React from "react";

export default function TemperatureUnits() {
  function showCelsius(event) {
    event.preventDefault();
    setUnits("metric");
    manageSearch();
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("imperial");
    manageSearch();
  }

  return (
    <span className="tempUnits">
      <a href="/" className="celsius-link active" onClick={showCelsius}>
        °C
      </a>{" "}
      |{" "}
      <a href="/" className="fahrenheit-link" onClick={showFahrenheit}>
        °F
      </a>
    </span>
  );
}
