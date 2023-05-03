import React, { useState,useEffect} from "react";
import axios from "axios";

import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function App() {
  const [city, setCity] = useState("Warsaw");
  const [weatherData, setWeatheData] = useState({
    temperature: null,
    humidity: null,
    description: null,
    wind: null,
    icon: null,
    timezone: null,
    coordinates:{
      latitude: 52.237049,
      longitude: 21.017532
    }})
  useEffect(() => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response)
        setWeatheData({
            temperature:response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon,
            timezone:response.data.timezone,
            coordinates:{
              latitude: response.data.coord.lat,
              longitude: response.data.coord.lon
            }
        });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city]); 

  return (
    <div className="App">
      <Search onChangeCity={setCity} />
      <CurrentWeather weatherData={weatherData} city={city}/>
      <Forecast coordinates = {weatherData.coordinates}/>
      <div>
            <a href="https://github.com/Anastasiia1015/react-weather-app" id="source-link">GO to source code</a>
      </div>
    </div>
  );
}
