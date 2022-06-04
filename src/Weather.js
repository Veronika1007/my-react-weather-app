import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather() {
  const apiKey = "f9113edd4d5c19caba9923a536e8e53e";
  let cityName = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  return (
    <div className="container">
      <div className="weather">
        <ul>
          <li>Day</li>
          <li>Time</li>
        </ul>
        <input type="Search" value="Enter a City" autoFocus="on" />
        <input type="submit" value="Submit" />
        <h1>London</h1>
        <h2>
          +21 <span> ℃</span>
        </h2>
        <div className="row">
          <div className="col-6">
            <ul classname="weather-information">
              <li>Rain</li>
              <li>humidity</li>
              <li>Wind</li>
            </ul>
          </div>
          <div className="col-6">
            <img
              className="image-icon"
              src="https://www.creativefabrica.com/wp-content/uploads/2019/04/Sun-Icon-by-demolabid-15.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
