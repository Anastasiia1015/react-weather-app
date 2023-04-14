import React, {useState, useEffect} from "react";
import axios  from "axios";
import { RotatingLines } from 'react-loader-spinner';
import DateInfo from "./DateInfo";  
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

                                                        


export default function CurrentWeather({ city }) {
  
  const [weatherData, setWeatheData] = useState({
    temperature: null,
    humidity: null,
    description: null,
    wind: null,
    icon: null,
    timezone: null,})
  useEffect(() => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd3bb6534458ba51b48c49f5155745b6&units=metric`;
    axios
      .get(apiUrl)
      .then((response) => {
        setWeatheData({
            temperature:response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon,
            timezone:response.data.timezone,
        });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city]);
  
  if(weatherData.temperature){
    return (
      <div className="CurrentWeather">
      <div className="WeatherInfo col">
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
    animationDuration="0.1"
    width="200"
    visible={true}
    />
  </div>
  )
}
}
