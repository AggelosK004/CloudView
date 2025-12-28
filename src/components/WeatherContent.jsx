import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { CloudQueue } from "@mui/icons-material";
import CurrentWeatherHeader from "./CurrentWeatherHeader";
import HourlyScroll from "./HourlyScroll";
import DailyList from "./DailyList";
import DetailsGrid from "./DetailsGrid";
import ErrorState from "./ErrorState";
export default function WeatherContent({
  state,
  actions
}) {
  const {
    weatherData,
    forecastData,
    loading,
    error
  } = state;
  if (error) return <ErrorState message={error} />;
  if (loading) {
    return <Box display="flex" justifyContent="center" mt={8}>
        <CircularProgress sx={{
        color: "white"
      }} />
      </Box>;
  }
  if (!weatherData) {
    return <Box textAlign="center" mt={8} sx={{
      opacity: 0.8,
      color: "white"
    }}>
        <CloudQueue sx={{
        fontSize: 80,
        mb: 2,
        opacity: 0.5
      }} />
        <Typography variant="h5" fontWeight="300">
          Search for a city...
        </Typography>
      </Box>;
  }
  return <>
      <CurrentWeatherHeader weather={weatherData} isFavorite={actions.isFavorite(weatherData.name)} onToggleFav={actions.toggleFavorite} />
      <HourlyScroll forecast={forecastData} />
      <DailyList forecast={forecastData} />
      <DetailsGrid weather={weatherData} />
      <Typography variant="caption" display="block" align="center" sx={{
      pb: 4,
      opacity: 0.5
    }}>
        Weather data provided by OpenWeather
      </Typography>
    </>;
}