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
            // 1. LAYOUT: Column on Phone, Row on Tablet/Desktop
            flexDirection={{ xs: 'column', sm: 'row' }} 
            justifyContent={'center'} 
            alignItems={'center'} 
            mt={4} 
            gap={2}
            sx={{ textAlign: 'center' }} 
        >
            
            {/* City Name */}
            <Typography 
                variant="h4" 
                sx={{ 
                    wordBreak: 'break-word', 
                    textAlign: 'center',
                    // 2. WIDTH: Full width on Phone, Natural width on PC
                    width: { xs: '100%', sm: 'auto' },
                    maxWidth: '100%'
                }}
            >
                {weather.name}
            </Typography>
            
            {/* Container for Temp & Icon */}
            <Box display="flex" alignItems="center" justifyContent="center">
                
                {/* 👇 TEMPERATURE UPDATE START 👇 */}
                <Typography 
                    variant="h3" // Bigger base size
                    sx={{ 
                        whiteSpace: 'nowrap',
                        fontWeight: 500, // Bold
                        // Fine-tune size: smaller on phone, huge on PC
                        fontSize: { xs: '1.5rem', sm: '2.5rem' } 
                    }}
                >
                    {Math.round(weather.main.temp)} °C
                </Typography>
                {/* 👆 TEMPERATURE UPDATE END 👆 */}
                
                <img 
                    src={iconUrl} 
                    alt={weather.weather[0].description} 
                    style={{ width: '80px', height: '80px' }} // Optional: slightly larger icon to match
                />
            </Box>
            
        </Box>
    );
}