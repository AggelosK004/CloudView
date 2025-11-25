import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        marginTop: 'auto',
        paddingTop: '2rem',
        paddingBottom: '1rem',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.57)',
        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        Created by AggelosK004
      </Typography>
      
      <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>
        Powered by{' '}
        <Link 
          href="https://openweathermap.org/" 
          target="_blank" 
          rel="noopener"
          color="inherit" 
          underline="hover"
          sx={{ fontWeight: 'bold' }}
        >
          OpenWeatherMap
        </Link>
      </Typography>
    </Box>
  );
}