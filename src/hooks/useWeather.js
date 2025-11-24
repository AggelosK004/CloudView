import { useState } from 'react';
import { getWeather, getForecast } from '../services/WeatherService';

export function useWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    setForecastData(null); 

    try {
      const data = await getWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchForecast = async () => {
    if (!weatherData || !weatherData.name) return;
    
    setLoading(true);
    try {
      const data = await getForecast(weatherData.name);
      setForecastData(data);
    } catch (err) {
      setError("Could not fetch forecast.");
    } finally {
      setLoading(false);
    }
  };

  const handleClearForecast = () => {
    setForecastData(null);
  };

  return { 
    weatherData, 
    forecastData, 
    loading, 
    error, 
    fetchWeather, 
    fetchForecast,
    handleClearForecast 
  };
}