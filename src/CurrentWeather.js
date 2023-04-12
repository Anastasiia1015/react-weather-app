import React, {useState, useEffect} from "react";
import axios  from "axios";
import { RotatingLines } from 'react-loader-spinner';
import DateInfo from "./DateInfo";  
import IMAGES from "./images/images.js";
                                                        


export default function CurrentWeather({ city }) {
  const iconMapping = {
    "01d" : "dsun",
    "01n" : "nsun",
    "02d" : "dsuncloud",
    "02n" : "nsuncloud",
    "03d" : "dcloudsun",
    "03n" : "ncloudsun",
    "04d" : "dcloud",
    "04n" : "ncloud",
    "09d" : "drain",
    "09n" : "nrain",
    "10d" : "dshower",
    "10n" : "nshower",
    "13d" : "dsnow",
    "13n" : "nsnow",
    "50d" : "dfog",
    "50n" : "nfog"
  }
  const [weatherData, setWeatheData] = useState({
    temperature: null,
    humidity: null,
    description: null,
    wind: null,
    icon: null,
    timezone: null,})
  const [weatherPicUrl, setWeatherPicUrl] = useState(`./images/unknown.png`)
  useEffect(() => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd3bb6534458ba51b48c49f5155745b6&units=metric`;
    axios
      .get(apiUrl)
      .then((response) => {
        setWeatheData({
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon,
            timezone:response.data.timezone,
        });
        setWeatherPicUrl(`../src/images/${response.data.weather[0].icon}.png`)
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
        <img src={IMAGES[iconMapping[weatherData.icon]]} alt={weatherData.description} />
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
