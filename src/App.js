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
    <>
      <CssBaseline />

      <Box
        sx={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          backgroundImage: `url(${weatherBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      <Box sx={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        width: '100%',
        padding: '2rem',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

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
    </>
  );
}

export default App;