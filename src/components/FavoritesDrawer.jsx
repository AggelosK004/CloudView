import React from 'react';
import { Drawer, Box, Typography, List, ListItem, ListItemText, ListItemButton, IconButton, Divider } from '@mui/material';
import { Delete } from '@mui/icons-material';

export default function FavoritesDrawer({ open, onClose, favorites, onSelectCity, onRemoveCity }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      
      <Box sx={{ width: 250, padding: 2 }}>
        
        <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
            My Favorites
            </Typography>
            <Divider />
        </Box>
        
        {favorites.length === 0 && (
            <Typography variant="body2" color="textSecondary">
                No favorites yet. Click the heart icon on a city to add it!
            </Typography>
        )}

        <List>
          {favorites.map((city) => (
            <ListItem 
                key={city} 
                disablePadding
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => onRemoveCity(city)}>
                      <Delete />
                    </IconButton>
                }
            >
              <ListItemButton onClick={() => {
                  onSelectCity(city); 
                  onClose();          
              }}>
                <ListItemText primary={city} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Box>
    </Drawer>
  );
}