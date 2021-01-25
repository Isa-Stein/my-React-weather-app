import React from "react";
import "./App.css";
import Weather from "./Weather.js";
import Developertag from "./Developertag.js";

function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="container">
          <div className="row">
            <img
              src="my-app/src/imgs/DayTime.png"
              className="card-image-top"
              alt="Time of Day Visual"
            />
          </div>
          <div className="row">
            <Weather />
          </div>
        </div>
      </div>
      <Developertag />
    </div>
  );
}

export default App;
