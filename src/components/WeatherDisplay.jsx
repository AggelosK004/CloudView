import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export default function WeatherDisplay({ weather, isFavorite, onToggleFavorite }) {
    if (weather == null) {
        return null;
    }

    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    return(
        <Box 
            position="relative" 
            display={'flex'} 
            flexDirection={{ xs: 'column', sm: 'row' }} 
            justifyContent={'center'} 
            alignItems={'center'} 
            mt={4} 
            gap={2}
            sx={{ textAlign: 'center' }} 
        >
            
            <Typography 
                variant="h4" 
                sx={{ 
                    wordBreak: 'break-word', 
                    textAlign: 'center',
                    width: { xs: '100%', sm: 'auto' },
                    maxWidth: '100%'
                }}
            >
                {weather.name}
            </Typography>
            
            <Box display="flex" alignItems="center" justifyContent="center">
                
                <Typography 
                    variant="h3" 
                    sx={{ 
                        whiteSpace: 'nowrap',
                        fontWeight: 500,
                        fontSize: { xs: '1.5rem', sm: '2.5rem' } 
                    }}
                >
                    {Math.round(weather.main.temp)} °C
                </Typography>
                
                <img 
                    src={iconUrl} 
                    alt={weather.weather[0].description} 
                    style={{ width: '80px', height: '80px' }} 
                />
                <IconButton 
                    onClick={() => onToggleFavorite(weather.name)}
                    color="error" 
                    sx={{ ml: 1 }}
                >
                    {isFavorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton>

            </Box>
            
        </Box>
    );
}