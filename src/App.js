import React, { useState} from "react";


import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function App() {
  const [city, setCity] = useState("Warsaw");
  

  return (
    <div className="App">
      <Search onChangeCity={setCity} />
      <CurrentWeather city={city} />
      <Forecast />
      <div>
            <a href="https://github.com/Anastasiia1015/react-weather-app">Go to source code</a>
      </div>
    </div>
  );
}
