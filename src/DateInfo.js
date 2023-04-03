import React from "react";

export default function DateInfo({ city }) {
  return (
    <div className="DateInfo col">
      <h2 className="city">{city}</h2>
      <p className="currentDay">Saturday</p>
      <p className="date">30.10.2022</p>
      <p className="time">19:17</p>
    </div>
  );
}