import React from "react";
import tempPic from "./images/unknown.png";

export default function DailyForecast() {
  return (
    <div className="dailyForecast col">
      <p className="day">weekday</p>
      <img src={tempPic} alt="sun" id="dailyIcon" />
      <div className="forecastTemp">
        <span className="minTemp">min temp°</span>
        <span className="maxTemp">max temp°</span>
      </div>
    </div>
  );
}
