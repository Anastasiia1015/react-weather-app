import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast({dailyData}) {
  function maxTemperature(){
    let temperature = Math.round(dailyData.temp.max);
    return temperature
  }
  function minTemperature(){
    let temperature = Math.round(dailyData.temp.min);
    return temperature
  }
  function day(){
    let date = new Date(dailyData.dt * 1000);
    let day = date.getDay()
    return day;
  }
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  if(dailyData){
    return (
      <div>
        <p className="day">{days[day()]}</p>
        <WeatherIcon icon={dailyData.weather[0].icon} description={dailyData.weather[0].description} />
        <div className="forecastTemperature">
          <span className="minTemp">{maxTemperature()}°</span>
          <span className="maxTemp">{minTemperature()}°</span>
        </div>
      </div>
    );
  }else{
    return null;
  }
}
