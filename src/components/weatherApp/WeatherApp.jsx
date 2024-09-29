import React, { useState } from "react";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import "./WeatherApp.css";
import loading_spinner from "../Assets/loader-removebg-preview.png"; // Add this line

function WeatherApp() {
  const [wicon, setwicon] = useState(cloud_icon);
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [loading, setLoading] = useState(false); // State for loading

  let api_key = "a0f8d0f1f96b6fd8074ee4af91184470";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput")[0];
    if (!element || element.value === "") {
      setTemperature("");
      setHumidity("");
      setWindSpeed("");
      return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${api_key}`;

    setLoading(true); // Start loading
    try {
      let response = await fetch(url);
      let data = await response.json();

      if (data.main) {
        setTemperature(`${Math.floor(data.main.temp)}°C`);
        setHumidity(`${Math.floor(data.main.humidity)}%`);
      }
      if (data.wind) {
        setWindSpeed(`${Math.floor(data.wind.speed)} km/hour`);
      }

      if (data.weather && data.weather[0]) {
        const icon = data.weather[0].icon;
        if (icon === "01d" || icon === "01n") {
          setwicon(clear_icon);
        } else if (
          icon === "02d" ||
          icon === "02n" ||
          icon === "04d" ||
          icon === "04n"
        ) {
          setwicon(cloud_icon);
        } else if (icon === "03d" || icon === "03n") {
          setwicon(drizzle_icon);
        } else if (
          icon === "09d" ||
          icon === "09n" ||
          icon === "10d" ||
          icon === "10n"
        ) {
          setwicon(rain_icon);
        } else if (icon === "13d" || icon === "13n") {
          setwicon(snow_icon);
        } else {
          setwicon(clear_icon);
        }
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="container">
      <header className="top-bar">
        <input type="text" className="cityInput" placeholder="Search city" />
        <div className="search-icon" onClick={search}>
          <img src={search_icon} alt="Search" />
        </div>
      </header>

      {loading ? ( // Show spinner while loading
        <div className="loader">
          <img src={loading_spinner} alt="Loading" />
        </div>
      ) : (
        <>
          <div className="weather-image">
            <img src={wicon} alt="Weather" />
          </div>

          <div className="weather_temp">{temperature}</div>

          <section className="data-container">
            <div className="element">
              <img src={humidity_icon} alt="Humidity" />
              <div className="data">
                <div className="humidity-percentage">{humidity}</div>
                <div className="text">Humidity</div>
              </div>
            </div>
            <div className="element">
              <img src={wind_icon} alt="Wind Speed" />
              <div className="data">
                <div className="wind-rate">{windSpeed}</div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}



export default WeatherApp;

