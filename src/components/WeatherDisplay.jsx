import React from 'react';
import { Box, Typography } from '@mui/material';

export default function WeatherDisplay({ weather }) {
    if (weather == null) {
        return null;
    }

    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    return(
        <Box 
            position="relative" 
            display={'flex'} 
            justifyContent={'center'} 
            flexWrap={'wrap'} 
            alignItems={'center'} 
            mt={4} 
            gap={2}
        >
            
            <Typography 
                variant="h4" 
                sx={{ 
                    wordBreak: 'break-word', 
                    textAlign: 'center',
                    maxWidth: '100%'
                }}
            >
                {weather.name}
            </Typography>
            
            <Typography variant="h5" sx={{ whiteSpace: 'nowrap' }}>
                {Math.round(weather.main.temp)} °C
            </Typography>
            
            <img src={iconUrl} alt={weather.weather[0].description} />
            
        </Box>
    );
}