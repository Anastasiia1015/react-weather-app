import React from "react";
import tempPic from "./images/unknown.png";
import Temperature from "./Temperature";

export default function WeatherInfo({ city }) {
  return (
    <div className="WeatherInfo col">
      <div className="row">
        <img src={tempPic} alt="unknown" />
        <div className="col">
          <Temperature city={city} />
          <a href="/" id="convert">
            Fahrenheit
          </a>
          <ul className="addinfo">
            <li>
              <span id="description">Default description</span>
            </li>
            <li>
              <span>Humidity: </span>
              <span id="humidity_value">???</span>
            </li>
            <li>
              <span>Wind: </span>
              <span id="wind_speed">???</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
