import React from "react";
import "./index.css";
import "./CityInfo.css";

export default function CityInfo() {
  return (
    <div className="CityInfo">
      <h1> Dublin</h1>
      <div className="date" id="currentDate">
        Monday, 11:11
      </div>
      <em className="dislaimer">* Last uptaded</em>
      <hr />
      <div className="temperature">
        <span id="currentTemp" className="temp">
          {" "}
          22{" "}
        </span>
        <small className="unit">
          <a href="." id="celsius" className="active">
            {" "}
            °C{" "}
          </a>{" "}
          |
          <a href="." id="fahr">
            °F
          </a>
        </small>
        <div className="weatherDescription" id="description">
          Cloud
        </div>
      </div>
    </div>
  );
}
