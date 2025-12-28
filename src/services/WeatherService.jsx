const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";
export const getWeather = async city => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) throw new Error(response.status === 404 ? "City not found" : "Failed to fetch weather");
  return response.json();
};
export const getForecast = async city => {
  const response = await fetch(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) throw new Error("Failed to fetch forecast");
  return response.json();
};
export const getWeatherByCoords = async (lat, lon) => {
  const response = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
  if (!response.ok) throw new Error("Could not fetch weather for this location");
  return response.json();
};
export const getForecastByCoords = async (lat, lon) => {
  const response = await fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
  if (!response.ok) throw new Error("Could not fetch forecast for this location");
  return response.json();
};