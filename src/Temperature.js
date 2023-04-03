import React, { useState } from "react";
import axios from "axios";

export default function Temperature({ city }) {
  const [temperature, setTemperature] = useState(null);
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd3bb6534458ba51b48c49f5155745b6&units=metric`;
  axios
    .get(apiUrl)
    .then(showTemperature)
    .catch((error) => {
      console.error("Error fetching temperature:", error);
    });
  if (temperature) {
    return (
      <p className="temperature">
        <span id="degrees">{Math.round(temperature)}</span>
        <span>°C</span>
      </p>
    );
  } else {
    return <span>Loading</span>;
  }
}