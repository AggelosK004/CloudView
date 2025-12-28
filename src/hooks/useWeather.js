import { useState } from "react";
import {
  getWeather,
  getForecast,
  getWeatherByCoords,
  getForecastByCoords } from
"../services/WeatherService";

export function useWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAll = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const [current, forecast] = await Promise.all([
      getWeather(city),
      getForecast(city)]
      );
      setWeatherData(current);
      setForecastData(forecast);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchByCoords = async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const [current, forecast] = await Promise.all([
      getWeatherByCoords(lat, lon),
      getForecastByCoords(lat, lon)]
      );
      setWeatherData(current);
      setForecastData(forecast);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, forecastData, loading, error, fetchAll, fetchByCoords };
}