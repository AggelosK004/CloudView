import React from "react";
import { Box, Typography } from "@mui/material";
import { Clock } from "lucide-react";
import GlassCard from "./GlassCard";
import WeatherIcon from "./WeatherIcon";
export default function HourlyScroll({
  forecast
}) {
  if (!forecast) return null;
  return <GlassCard title="24-Hour Forecast" icon={Clock}>
      <Box sx={{
      display: "flex",
      overflowX: "auto",
      gap: 3,
      pb: 1,
      "::-webkit-scrollbar": {
        display: "none"
      },
      userSelect: "none"
    }}>
        {forecast.list.slice(0, 8).map((item, idx) => <Box key={idx} sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: 50
      }}>
            <Typography variant="body2" sx={{
          fontWeight: 600,
          mb: 1
        }}>
              {idx === 0 ? "Now" : new Date(item.dt * 1000).toLocaleTimeString([], {
            hour: "numeric"
          })}
            </Typography>
            <WeatherIcon code={item.weather[0].icon} size={24} />
            <Typography variant="h6" sx={{
          fontWeight: 500,
          mt: 1
        }}>
              {Math.round(item.main.temp)}°
            </Typography>
          </Box>)}
      </Box>
    </GlassCard>;
}