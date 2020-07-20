import React from "react";
import SearchEngine from "./SearchEngine";
import CityInfo from "./CityInfo";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./index.css";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="weatherAppWrapper">
        <div className="container">
          <SearchEngine />
          <div className="row">
            <div className="col-6">
              <CityInfo />
            </div>
            <div className="col-6">
              <img src="img/02n.png" id="iconW" alt="icon-weather" />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <WeatherInfo />
            </div>
            <div className="col-8">
              <img
                src="img/undraw_through_the_park_lxnl2.svg"
                alt="Park"
                width="300px"
                className="imgPark"
              />
            </div>
          </div>
          <hr />
          <div className="week" id="week">
            <div className="row weather-forecast" id="weekForecast">
              <div className="col-2">
                <Forecast day="Mon" maxTemp="22" minTemp="11" />
              </div>
              <div className="col-2">
                <Forecast day="Tue" maxTemp="26" minTemp="15" />
              </div>
              <div className="col-2">
                <Forecast day="Wed" maxTemp="28" minTemp="17" />
              </div>
              <div className="col-2">
                <Forecast day="Thur" maxTemp="24" minTemp="13" />
              </div>
              <div className="col-2">
                <Forecast day="Fri" maxTemp="17" minTemp="10" />
              </div>
              <div className="col-2">
                <Forecast day="Sat" maxTemp="22" minTemp="11" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
