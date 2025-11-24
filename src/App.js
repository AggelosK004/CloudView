import React from 'react';
import { Box, Container, Typography, CircularProgress, Alert, Button, CssBaseline } from '@mui/material'; 
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';
import weatherBg from './assets/wp11789974.jpg'; 
import { useWeather } from './hooks/useWeather';

function App() {
  
  const { weatherData, forecastData, loading, error, fetchWeather, fetchForecast, handleClearForecast } = useWeather();
  
  return (
    <Box sx={{ 
          minHeight: '100dvh', 
          width: '100%',
          backgroundImage: `url(${weatherBg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', 
          padding: '2rem',
          boxSizing: 'border-box',
          overflowY: 'auto', 
          overflowX: 'hidden' 
         }}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ marginTop: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.62)', backdropFilter: 'blur(5px)', padding:{ xs: '1.5rem', sm: '3rem' }, borderRadius: '8px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
        
        <Typography variant="h3" align="center" gutterBottom
                    sx={{ 
                        fontFamily: "'Pacifico', cursive",
                        fontSize: { xs: '3rem', sm: '4.5rem' },
                        fontWeight: 200,
                        letterSpacing: '1px',
                        textShadow: '3px 3px 0px rgba(0,0,0,0.2)', 
                        color: 'rgba(0, 61, 102, 1)',
                        }} 
                        >CloudView</Typography>
        
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
            <WeatherDisplay weather={weatherData} />

            {weatherData && !forecastData && (
              <Box display="flex" justifyContent="center" mt={3}>
                <Button variant="contained" onClick={fetchForecast} >
                  See 5-Day Prognosis
                </Button>
              </Box>
            )}
            
            <ForecastDisplay forecast={forecastData} />

            {forecastData && (
              <Box display="flex" justifyContent="center" mt={3}>
                <Button variant="contained"  onClick={handleClearForecast}>
                  Hide Prognosis
                </Button>
              </Box>
            )}
          </>
        )}

      </Container>
    </Box>
  );
}

export default App;