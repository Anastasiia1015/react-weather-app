import React from "react";
import { RotatingLines } from 'react-loader-spinner';
import DateInfo from "./DateInfo";  
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

                                                        


export default function CurrentWeather({ weatherData ,city}) {
  
  

  if(weatherData.temperature){
    return (
      <div className="CurrentWeather">
      <div className="WeatherInfo col-6">
      <div className="row">
        
        <WeatherIcon icon={weatherData.icon} description={weatherData.description}/> 
      
        
        <div className="col">
          <WeatherTemperature celsius={weatherData.temperature}/>
          
          <ul className="addinfo">
            <li>
              <span id="description">{weatherData.description}</span>
            </li>
            <li>
              <span>Humidity: </span>
              <span id="humidity_value">{weatherData.humidity}</span>
            </li>
            <li>
              <span>Wind: </span>
              <span id="wind_speed">{weatherData.wind}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <DateInfo city={city} timezone={weatherData.timezone}/>
    </div>
  );
}else{
  return(
    <div>
    <RotatingLines
    strokeColor="lightblue"
    strokeWidth="5"
    animationDuration="2"
    width="200"
    visible={true}
    />
  </div>
  )
}
}
