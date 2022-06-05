import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather(prop) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconURL:
        "https://www.creativefabrica.com/wp-content/uploads/2019/04/Sun-Icon-by-demolabid-15.jpg",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather">
          <p>Day</p>
          <p>Time</p>
          <input type="Search" value="Enter a City" autoFocus="on" />
          <input type="submit" value="Submit" />
          <h1>{weatherData.city}</h1>
          <h2>
            {Math.round(weatherData.temperature)}
            <span> ℃</span>
          </h2>
          <div className="row">
            <div className="col-6">
              <ul classname="weather-information">
                <li>Humidity {weatherData.humidity}%</li>
                <li>Wind {weatherData.wind} km/h</li>
              </ul>
            </div>
            <div className="col-6">
              <img
                className="image-icon"
                src={weatherData.iconURL}
                alt={weatherData.description}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f9113edd4d5c19caba9923a536e8e53e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${prop.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
