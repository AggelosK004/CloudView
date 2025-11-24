const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = async (city) => {
  if (!API_KEY) {
    throw new Error("API Key is missing! Check your .env file.");
  }

  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === '404' || data.cod === 404) {
    throw new Error("City not found. Please try again.");
  }

  if (!response.ok) {
    throw new Error("Failed to fetch current weather.");
  }

  return data;
};

export const getForecast = async (city) => {
  if (!API_KEY) {
    throw new Error("API Key is missing! Check your .env file.");
  }

  const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === '404' || data.cod === 404) {
    throw new Error("City not found for forecast.");
  }

  if (!response.ok) {
    throw new Error("Failed to fetch forecast data.");
  }

  return data;
};