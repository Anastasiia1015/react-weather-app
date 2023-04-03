import React from "react";
import WeatherInfo from "./WeatherInfo";
import DateInfo from "./DateInfo";

export default function CurrentWeather({ city }) {
  return (
    <div className="CurrentWeather">
      <WeatherInfo city={city} />
      <DateInfo city={city} />
    </div>
  );
}
