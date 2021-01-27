import React from "react";
import "./App.css";
import Weatherapp from "./Weatherapp.js";
import Developertag from "./Developertag.js";

function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="container">
          <div>
            <Weatherapp />
          </div>
        </div>
      </div>
      <Developertag />
    </div>
  );
}

export default App;
