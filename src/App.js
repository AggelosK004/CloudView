import React from 'react';
import { Box, Container, Typography, CircularProgress, Alert, Button, CssBaseline } from '@mui/material'; 

// Components
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';

// Assets
import weatherBg from './assets/wp11789974.jpg'; 

// Custom Hooks
import { useWeather } from './hooks/useWeather';

function App() {
  // We only need the Weather hook now
  const { weatherData, forecastData, loading, error, fetchWeather, fetchForecast, handleClearForecast } = useWeather();
  
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      padding: '2rem',
      backgroundImage: `url(${weatherBg})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      boxSizing: 'border-box'
    }}>
      
      <CssBaseline />

      {/* Main Glass Card */}
      <Container maxWidth="sm" style={{ marginTop: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.62)', backdropFilter: 'blur(5px)', padding: '2rem', borderRadius: '8px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
        
        <Typography variant="h3" align="center" gutterBottom>CloudView</Typography>
        
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
                <Button variant="contained" color="secondary" onClick={fetchForecast}>
                  See 5-Day Prognosis
                </Button>
              </Box>
            )}
            
            <ForecastDisplay forecast={forecastData} />

            {forecastData && (
              <Box display="flex" justifyContent="center" mt={3}>
                <Button variant="contained" color="secondary" onClick={handleClearForecast}>
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