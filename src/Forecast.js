import React from "react";
import DailyForecast from "./DailyForecast";

export default function Forecast() {
  return (
    <div className="Forecast row">
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
    </div>
  );
}