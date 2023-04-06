import React, { useState } from "react";

export default function Search({ onChangeCity }) {
  const [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    onChangeCity(city);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        id="searchInput"
        onChange={updateCity}
        autoFocus="on"
      />
      <button type="submit" className="search_button">
        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}