import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function SearchBar({ onSubmit }) {

  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(inputValue)) {
      setCity(inputValue);
    }
  };

  const handleSearch = () => { 
    if (city.trim() !== '') {
      onSubmit(city); 
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box 
      display="flex" 
      flexDirection={{ xs: 'column', sm: 'row' }} 
      justifyContent="center" 
      alignItems="center" 
      mb={2} 
      gap={2}
    >
        
        <TextField
          label="Enter city"
          variant="outlined"
          value={city}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} 
          sx={{ width: { xs: '100%', sm: 'auto' } }} 
        />

        <Button 
          variant="contained" 
          onClick={handleSearch}
          disabled={city.trim().length === 0}
          sx={{ width: { xs: '100%', sm: 'auto' }, height: '56px' }}
        >
          Search
        </Button>

    </Box>
  );
}