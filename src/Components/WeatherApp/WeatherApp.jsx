import React from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search-icon.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import clear_icon from "../Assets/clear.png";
import snow_icon from "../Assets/snow.png";
import windy_icon from "../Assets/windy.png";

const WeatherApp = () => {
  let api_key = "7506ebd33ad3ee264b4f1550af60e2a7";
  const search = () => {
    const element = document.getElementsByClassName("city");
    if (element[0].value === "") {
      return 0;
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="city" placeholder="Search" />
        <div className="search-icon">
          <img src={search_icon} />
        </div>
      </div>
      <div className="cloud-icon">
        <img src={cloud_icon} />
      </div>
      <div className="Temperature"> 24°C</div>
      <div className="Location"> Weligama</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windy_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
