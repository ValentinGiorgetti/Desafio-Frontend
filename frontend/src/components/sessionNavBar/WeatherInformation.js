import { useState, useEffect } from 'react';

function WeatherInformation() {
  const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=-34.92&longitude=-57.95&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto"

	const [weatherData, setWeatherData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data.daily);
        setIsLoading(false);
      });
  }, []);

  function getMinMax(weatherData) {
    return ` ${weatherData.temperature_2m_max[0]}° (max) - ${weatherData.temperature_2m_min[0]}° (min) `
  }

  return isLoading ? ("Cargando temperatura...") : (getMinMax(weatherData));
}

export default WeatherInformation;