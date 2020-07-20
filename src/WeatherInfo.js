import React from "react";
import "./index.css";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="info">
      <span className="precipitation"> Humidity: </span>
      <span id="currentHumidity" />%
      <br />
      <span className="wind">Wind: </span>
      <span id="currentWind" />
      km/h
      <br />
      <span className="feeling"> Feels like: </span>
      <span id="currentFeeling" /> °C
      <br />
      <span className="sunrise">Sunrise: </span>
      <span id="sunriseTime" />
      <br />
      <span className="sunset">Sunset: </span>
      <span id="sunsetTime" />
    </div>
  );
}
