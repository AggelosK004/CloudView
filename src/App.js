import React, { useState } from 'react';
import { Box, CssBaseline, Button } from '@mui/material'; 
import { Menu as MenuIcon } from '@mui/icons-material';
import FavoritesDrawer from './components/FavoritesDrawer';
import WeatherDashboard from './components/WeatherDashboard';
import Footer from './components/Footer'; 
import weatherBg from './assets/wp11789974.jpg'; 
import { useWeather } from './hooks/useWeather';
import { useFavorites } from './hooks/useFavorites';

function App() {
  const weatherHook = useWeather();
  const favoritesHook = useFavorites();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
    }}>
      <CssBaseline />

      <Box position="absolute" top={20} left={20} zIndex={10}>
        <Button 
            variant="contained"
            startIcon={<MenuIcon />}
            onClick={() => setIsDrawerOpen(true)}
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.8)', 
              color: 'rgba(0, 61, 102, 1)',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: 'white' } 
            }}
        >
            Favorites
        </Button>
      </Box>

      <FavoritesDrawer 
        open={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
        favorites={favoritesHook.favorites}
        onSelectCity={(city) => {
            weatherHook.fetchWeather(city); 
            setIsDrawerOpen(false);
        }}
        onRemoveCity={favoritesHook.removeFavorite}
      />

      <WeatherDashboard 
        weatherHook={weatherHook} 
        favoritesHook={favoritesHook} 
      />

      <Footer />

    </Box>
  );
}

export default App;