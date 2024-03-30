import React, { useEffect, useState } from "react";
import axios from "axios";
import './WeatherDisplay.css'

export const WeatherDisplay = ({city}) => {

  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    if(city) {
      setIsLoading(true);
      axios.get("https://api.weatherapi.com/v1/current.json",
        {params: {
          key: "7488102a56df4b1fa02223021240401",
          q: city
          }
        }).then(response => setWeatherData(response.data))
          .catch(error => {
            console.log(error);
            alert("Failed to fetch weather data");
          })
          .finally(() => setIsLoading(false));
    }
  }, [city]);

  console.log(weatherData);

  return(
    <div>
      {!isLoading && weatherData.current && 
        <div className="weather-cards">
          <div className="weather-card">
            <h2>Temperature</h2>
            <p>{weatherData.current.temp_c}&deg;C</p> {/* HTML entity for degree */}
          </div>
          <div className="weather-card">
            <h2>Humidity</h2>
            <p>{weatherData.current.humidity}%</p> 
          </div>
          <div className="weather-card">
            <h2>Condition</h2>
            <p>{weatherData.current.condition.text}</p> 
          </div>
          <div className="weather-card">
            <h2>Wind Speed</h2>
            <p>{weatherData.current.wind_kph}kph</p> 
          </div>
        </div>
      }
      {isLoading && <p>Loading data...</p>}
    </div>
  )
}