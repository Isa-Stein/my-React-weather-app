import React from "react";
import "./App.css";
import Weatherapp from "./Weatherapp.js";
import Developertag from "./Developertag.js";

function App() {
  return (
    <div className="app">
      <div className="card">
        <Weatherapp defaultCity="Florence" />
      </div>
      <Developertag />
    </div>
  );
}

export default App;
