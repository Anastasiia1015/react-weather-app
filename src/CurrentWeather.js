import React, {useState, useEffect} from "react";
import axios  from "axios";
import tempPic from "./images/unknown.png";
import { RotatingLines } from 'react-loader-spinner';



export default function CurrentWeather({ city }) {
  const [weatherData, setWeatheData] = useState({})
  useEffect(() => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd3bb6534458ba51b48c49f5155745b6&units=metric`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response)
        setWeatheData({
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon
        });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city]);
  if(weatherData){
    return (
      <div className="CurrentWeather">
      <div className="WeatherInfo col">
      <div className="row">
        <img src={tempPic} alt={weatherData.description} />
        <div className="col">
        <p className="temperature">
        <span id="degrees">{weatherData.temperature}</span>
        <span>°C</span>
        </p>
          <a href="/" id="convert">
            Fahrenheit
          </a>
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
    <div className="DateInfo col">
      <h2 className="city">{city}</h2>
      <p className="currentDay">Saturday</p>
      <p className="date">30.10.2022</p>
      <p className="time">19:17</p>
    </div>
    </div>
  );
}else{
  return(
    <div>
    <RotatingLines
    strokeColor="lightblue"
    strokeWidth="5"
    animationDuration="0.1"
    width="96"
    visible={true}
    />
  </div>
  )
}
}
