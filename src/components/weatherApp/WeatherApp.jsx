import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaWind,
  FaTint,
  FaCompass,
  FaCompressArrowsAlt,
  FaSun,
  FaMoon,
  FaClock,
} from "react-icons/fa";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import loading_spinner from "../Assets/loader-removebg-preview.png";
import "./WeatherApp.css";

function WeatherApp() {
  const [wicon, setwicon] = useState(cloud_icon);
  const [temperature, setTemperature] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDirection, setWindDirection] = useState("");
  const [pressure, setPressure] = useState("");
  const [uvIndex, setUVIndex] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [localTime, setLocalTime] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const api_key = "a0f8d0f1f96b6fd8074ee4af91184470";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput")[0];
    if (!element || element.value === "") {
      resetWeatherData();
      return;
    }

    const city = element.value;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${api_key}`;

    setLoading(true);
    setError("");

    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(weatherUrl),
        fetch(forecastUrl),
      ]);

      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();

      if (weatherData.cod === "404") {
        setError("City not found");
        resetWeatherData();
        return;
      }

      setTemperature(`${Math.floor(weatherData.main.temp)}°C`);
      setFeelsLike(`${Math.floor(weatherData.main.feels_like)}°C`);
      setHumidity(`${Math.floor(weatherData.main.humidity)}%`);
      setWindSpeed(`${Math.floor(weatherData.wind.speed)} km/h`);
      setWindDirection(getWindDirection(weatherData.wind.deg));
      setPressure(`${weatherData.main.pressure} hPa`);
      setUVIndex(await fetchUVIndex(weatherData.coord.lat, weatherData.coord.lon));
      setSunrise(formatTime(weatherData.sys.sunrise));
      setSunset(formatTime(weatherData.sys.sunset));
      setLocalTime(new Date(weatherData.dt * 1000).toLocaleTimeString());
      setWeatherDescription(weatherData.weather[0].description);

      const forecastList = forecastData.list.filter((_, index) => index % 8 === 0);
      setForecast(forecastList);

      setHistory((prev) => [...new Set([city, ...prev])].slice(0, 5));
    } catch (error) {
      setError("An error occurred while fetching the data");
    } finally {
      setLoading(false);
    }
  };

  const getWindDirection = (deg) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return directions[Math.round(deg / 45) % 8];
  };

  const fetchUVIndex = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.value;
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString();
  };

  const resetWeatherData = () => {
    setTemperature("");
    setFeelsLike("");
    setHumidity("");
    setWindSpeed("");
    setWindDirection("");
    setPressure("");
    setUVIndex("");
    setSunrise("");
    setSunset("");
    setForecast([]);
    setWeatherDescription("");
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header className="top-bar">
        <input type="text" className="cityInput" placeholder="Search city" />
        <div className="search-icon" onClick={search}>
          <FaSearch />
        </div>
        <button onClick={toggleDarkMode} className="theme-toggle-btn">
  {darkMode ? <FaSun /> : <FaMoon />}
 
 
</button>

      </header>

      {loading ? (
        <div className="loader">
          <img src={loading_spinner} alt="Loading" />
        </div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <div className="current-weather">
            <img src={wicon} alt="Weather" />
            <div className="weather-info">
              <div className="temperature">{temperature}</div>
              <div className="feels-like">Feels Like: {feelsLike}</div>
              <div className="weather-desc">{weatherDescription}</div>
            </div>
          </div>

          <section className="extra-info">
            <div className="humidity">
              <FaTint /> Humidity: {humidity}
            </div>
            <div className="wind-speed">
              <FaWind /> Wind Speed: {windSpeed}
            </div>
            <div className="wind-direction">
              <FaCompass /> Wind Direction: {windDirection}
            </div>
            <div className="pressure">
              <FaCompressArrowsAlt /> Pressure: {pressure}
            </div>
            <div className="uv-index">
              <FaSun /> UV Index: {uvIndex}
            </div>
            <div className="sunrise">
              <FaSun /> Sunrise: {sunrise}
            </div>
            <div className="sunset">
              <FaMoon /> Sunset: {sunset}
            </div>
            <div className="local-time">
              <FaClock /> Local Time: {localTime}
            </div>
          </section>

          <section className="forecast">
            <h3>5-Day Forecast</h3>
            <div className="forecast-container">
              {forecast.map((day, index) => (
                <div
                  key={index}
                  className={`forecast-element ${Math.floor(day.main.temp) < 20 ? 'cold' : day.weather[0].main === 'Rain' ? 'rainy' : 'warm'}`}
                >
                  <div>{new Date(day.dt * 1000).toLocaleDateString()}</div>
                  <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="weather icon" />
                  <div>{Math.floor(day.main.temp)}°C</div>
                </div>
              ))}
            </div>
          </section>

          <section className="search-history">
            <h3>Search History</h3>
            <ul>
              {history.map((city, index) => (
                <li key={index} onClick={() => { document.getElementsByClassName("cityInput")[0].value = city; search(); }}>
                  {city}
                </li>
              ))}
            </ul>
          </section>

          <section className="favorite-cities">
            <h3>Favorite Cities</h3>
            <ul>
              {favoriteCities.map((city, index) => (
                <li key={index}>{city}</li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}

export default WeatherApp;
