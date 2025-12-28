import React from "react";
import { Box, Typography } from "@mui/material";
import { Wind, Droplets, Thermometer, Eye, Gauge, Sunset } from "lucide-react";
import GlassCard from "./GlassCard";
export default function DetailsGrid({
  weather
}) {
  if (!weather) return null;
  const details = [{
    title: "Feels Like",
    value: `${Math.round(weather.main.feels_like)}°`,
    icon: Thermometer
  }, {
    title: "Humidity",
    value: `${weather.main.humidity}%`,
    icon: Droplets
  }, {
    title: "Wind",
    value: `${weather.wind.speed} m/s`,
    icon: Wind
  }, {
    title: "Pressure",
    value: `${weather.main.pressure} hPa`,
    icon: Gauge
  }, {
    title: "Visibility",
    value: `${(weather.visibility / 1000).toFixed(1)} km`,
    icon: Eye
  }, {
    title: "Sunset",
    value: new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }),
    icon: Sunset
  }];
  return <Box sx={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: 2,
    mb: 4,
    userSelect: "none"
  }}>
      {details.map((det, i) => <GlassCard key={i} title={det.title} icon={det.icon} sx={{
      mb: 0,
      height: "100%",
      minHeight: 110
    }}>
          <Typography variant="h5" sx={{
        mt: 1,
        fontWeight: "bold"
      }}>
            {det.value}
          </Typography>
        </GlassCard>)}
    </Box>;
}