import React, {useState,useEffect} from "react";
import DailyForecast from "./DailyForecast";
import axios from "axios";

export default function Forecast({coordinates}) {
  const [forecastData, setForecastData] = useState({})
  useEffect(()=>{
    let latitude=coordinates.latitude;
    let longitude=coordinates.longitude;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=bd3bb6534458ba51b48c49f5155745b6&units=metric`;
    axios.get(apiURL)
    .then((response) => {
      console.log(response.data.daily)
      setForecastData(response.data)
      })
    .catch((error) => {
      console.log(error);
      console.error("Error fetching forecast data:", error);
    });
  },[coordinates])
  if(forecastData.daily ){
    return (
      <div className="Forecast row">
        {forecastData.daily.map(function(dailyforecast, index){
          if(index < 5){
            return (
              <div key={index} className="col">
                <DailyForecast dailyData = {dailyforecast}/> 
              </div>
            )
          }else{
            return null
          }
        })} 
      </div>
    );
  }else{
    return null;
  }
}