import React from "react";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
export default function FavoritesDrawer({
  open,
  onClose,
  favorites,
  onSelect,
  onRemove,
}) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: 280,
            color: "white",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
            backdropFilter: "blur(20px) saturate(120%)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "-8px 0 32px rgba(0, 0, 0, 0.3)",
          },
        },
      }}
    >
      <Box p={3} sx={{ height: "100%", overflowY: "auto" }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)", pl: 1 }}
        >
          Favorites
        </Typography>
        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", mb: 3 }} />
        {favorites.length === 0 && (
          <Typography
            variant="body2"
            sx={{
              opacity: 0.6,
              textAlign: "center",
              mt: 4,
              fontStyle: "italic",
            }}
          >
            No locations added yet.
          </Typography>
        )}
        <List>
          {favorites.map((city) => (
            <ListItem
              key={city}
              disablePadding
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => onRemove(city)}
                  sx={{
                    color: "rgba(255, 255, 255, 0.4)",
                    "&:hover": { color: "#ff4444" },
                    transition: "color 0.2s",
                  }}
                >
                  <DeleteOutline />
                </IconButton>
              }
              sx={{
                mb: 1.5,
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.15)",
                  transform: "translateX(-4px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                },
              }}
            >
              <ListItemButton
                onClick={() => {
                  onSelect(city);
                  onClose();
                }}
                sx={{ borderRadius: "16px" }}
              >
                <ListItemText
                  primary={city}
                  slotProps={{
                    primary: {
                      sx: {
                        fontWeight: 500,
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
