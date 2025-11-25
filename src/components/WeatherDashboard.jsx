import React from 'react';
import { Container, Box, CircularProgress, Alert, Button, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import ForecastDisplay from './ForecastDisplay';

export default function WeatherDashboard({ weatherHook, favoritesHook }) {
  const { weatherData, forecastData, loading, error, fetchWeather, fetchForecast, handleClearForecast } = weatherHook;
  const { toggleFavorite, isFavorite } = favoritesHook;

  return (
    <Container 
      maxWidth="sm" 
      sx={{ 
        marginTop: '2rem', 
        backgroundColor: 'rgba(255, 255, 255, 0.62)', 
        backdropFilter: 'blur(5px)', 
        padding: { xs: '1.5rem', sm: '3rem' }, 
        borderRadius: '8px', 
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' 
      }}
    >
      <Typography 
        variant="h3" 
        align="center" 
        gutterBottom
        sx={{ 
            fontFamily: "'Pacifico', cursive",
            fontSize: { xs: '3rem', sm: '4.5rem' },
            fontWeight: 200,
            letterSpacing: '1px',
            textShadow: '3px 3px 0px rgba(0,0,0,0.2)', 
            color: 'rgba(0, 61, 102, 1)',
            marginBottom: '1.5rem'
        }}
      >
        CloudView
      </Typography>

      <SearchBar onSubmit={fetchWeather} /> 

      {error && (
        <Box mt={2} mb={2}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <WeatherDisplay 
              weather={weatherData} 
              isFavorite={weatherData && isFavorite(weatherData.name)}
              onToggleFavorite={toggleFavorite}
          />

          {weatherData && !forecastData && (
            <Box display="flex" justifyContent="center" mt={3}>
              <Button variant="contained" onClick={fetchForecast}>
                See 5-Day Prognosis
              </Button>
            </Box>
          )}
          
          <ForecastDisplay forecast={forecastData} />

          {forecastData && (
            <Box display="flex" justifyContent="center" mt={3}>
              <Button variant="contained" onClick={handleClearForecast}>
                Hide Prognosis
              </Button>
            </Box>
          )}
        </>
      )}

    </Container>
  );
}