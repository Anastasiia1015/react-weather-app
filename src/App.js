import React, { useState } from "react";

import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function App() {
  const [city, setCity] = useState("Lodz");

  return (
    <div className="App">
      <Search onChangeCity={setCity} />
      <CurrentWeather city={city} />
      <Forecast />
    </div>
  );
}
