// 1. IMPORTS
import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function SearchBar({ onSubmit }) {

  const [city, setCity] = useState('');

  // --- INPUT VALIDATION ---
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Only allow English letters and spaces
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(inputValue)) {
      setCity(inputValue);
    }
  };

  const handleSearch = () => { 
    // Double check: prevent searching if it's just spaces
    if (city.trim() !== '') {
      onSubmit(city); 
    }
  };
  const handleKeyDown = (e) => {
    // Check if the specific key pressed was "Enter"
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box display="flex" justifyContent="center" mb={2} gap={2}>
        
        <TextField
          label="Enter city"
          variant="outlined"
          value={city}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          
        />

        <Button 
          variant="contained" 
          onClick={handleSearch}
          // 👇 NEW: Disable button if text is empty or just spaces
          disabled={city.trim() === ''}
        >
          Search
        </Button>

    </Box>
  );
}