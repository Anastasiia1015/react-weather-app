import React from "react";

export default function DateInfo({ city, timezone}) {
  function calcTime(offset) {
    // create Date object for current location
    let firstDate = new Date();
    let utc = firstDate.getTime() + (firstDate.getTimezoneOffset() * 60000);
    let newDate = new Date(utc + (3600000*(offset/3600)));
    return newDate;
  }
  
  let dateInfo = calcTime(timezone)
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[dateInfo.getDay()]
  let hours = dateInfo.getHours();
  let minutes = dateInfo.getMinutes();
  let date = dateInfo.getDate();
  let month = dateInfo.getMonth() + 1;
  let year = dateInfo.getFullYear();
 
  if(hours<10){
    hours = `0${hours}`
  }
  if(minutes<10){
    minutes = `0${minutes}`
  }
  if(date<10){
    date = `0${date}`
  }
  if(month<10){
    month = `0${month}`
  }
  return (
    <div className="DateInfo col-6">
      <h2 className="city">{city}</h2>
      <p className="currentDay">{day}</p>
      <p className="date">{date}.{month}.{year}</p>
      <p className="time">{hours}:{minutes}</p>
    </div>
  );
}