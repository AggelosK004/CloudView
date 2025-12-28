import React from "react";
import { Stack, Divider, Box, Typography } from "@mui/material";
import { CalendarDays } from "lucide-react";
import GlassCard from "./GlassCard";
import WeatherIcon from "./WeatherIcon";
export default function DailyList({
  forecast
}) {
  if (!forecast) return null;
  return <GlassCard title="5-Day Forecast" icon={CalendarDays}>
      <Stack divider={<Divider sx={{
      borderColor: "rgba(255,255,255,0.1)"
    }} />} spacing={0}>
        {forecast.list.filter(i => i.dt_txt.includes("12:00:00")).map(item => <Box key={item.dt} sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 1.5,
        userSelect: "none"
      }}>
              <Typography variant="body1" sx={{
          width: 100,
          fontWeight: 500
        }}>
                {new Date(item.dt * 1000).toLocaleDateString("en-US", {
            weekday: "long"
          })}
              </Typography>
              <Box sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center"
        }}>
                <WeatherIcon code={item.weather[0].icon} size={24} />
              </Box>
              <Box sx={{
          width: 100,
          display: "flex",
          justifyContent: "flex-end",
          gap: 2
        }}>
                <Typography variant="body1" sx={{
            opacity: 0.5
          }}>
                  {Math.round(item.main.temp - 2)}°
                </Typography>
                <Typography variant="body1" sx={{
            fontWeight: 600
          }}>
                  {Math.round(item.main.temp + 2)}°
                </Typography>
              </Box>
            </Box>)}
      </Stack>
    </GlassCard>;
}