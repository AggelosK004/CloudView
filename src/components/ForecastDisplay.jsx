import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

export default function ForecastDisplay({ forecast }) {
  if (!forecast) return null;

  const dailyForecasts = forecast.list.filter(reading => 
    reading.dt_txt.includes("12:00:00")
  );

  return (
    <Box mt={4}>
      <Typography variant="h5" align="center" gutterBottom style={{ color: 'white' }}>
        5-Day Prognosis
      </Typography>
      
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {dailyForecasts.map((day) => (
          <Card key={day.dt} sx={{ minWidth: 100, backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(5px)' }}>
            <CardContent style={{ textAlign: 'center', color: 'white' }}>
              <Typography variant="body2">
                {new Date(day.dt * 1000).toLocaleDateString(undefined, { weekday: 'short' })}
              </Typography>
              <img 
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
                alt={day.weather[0].description} 
              />
              <Typography variant="h6">
                {Math.round(day.main.temp)}°C
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}