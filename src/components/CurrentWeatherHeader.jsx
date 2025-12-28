import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
export default function CurrentWeatherHeader({
  weather,
  isFavorite,
  onToggleFav,
}) {
  if (!weather) return null;
  return (
    <Box
      sx={{
        textAlign: "center",
        pt: {
          xs: 4,
          sm: 6,
        },
        pb: 6,
        color: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {}
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
          px: 2,
          maxWidth: "100%",
        }}
      >
        {}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 400,
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            fontSize: {
              xs: "2rem",
              sm: "3rem",
            },
            lineHeight: 1.1,
            wordBreak: "break-word",
          }}
        >
          {weather.name}
        </Typography>
        {}
        <Box
          component="span"
          sx={{
            position: "absolute",
            left: "100%",
            top: "50%",
            transform: "translateY(-50%)",
            ml: 3,
            display: "flex",
            mt: 0.5,
          }}
        >
          <IconButton
            onClick={() => onToggleFav(weather.name)}
            sx={{
              mt: -0.5,
              width: 48,
              height: 48,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
              backdropFilter: "blur(20px) saturate(120%)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: `
                inset 0 1px 2px rgba(255, 255, 255, 0.3),
                inset 0 -1px 2px rgba(0, 0, 0, 0.05),
                0 4px 12px rgba(0, 0, 0, 0.1)
                `,
              color: isFavorite ? "white" : "rgba(255,255,255,0.8)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)",
                boxShadow: `
                    inset 0 1px 2px rgba(255, 255, 255, 0.4),
                    0 8px 20px rgba(0, 0, 0, 0.2)
                `,
                color: isFavorite ? "white" : "white",
              },
            }}
          >
            {isFavorite ? (
              <Favorite fontSize="medium" />
            ) : (
              <FavoriteBorder fontSize="medium" />
            )}
          </IconButton>
        </Box>
      </Box>
      {}
      <Typography
        variant="h1"
        sx={{
          fontWeight: 200,
          fontSize: {
            xs: "5rem",
            sm: "6rem",
          },
          letterSpacing: "-2px",
          my: 1,
          textAlign: "center",
        }}
      >
        {Math.round(weather.main.temp)}°
      </Typography>
      {}
      <Typography
        variant="h6"
        sx={{
          opacity: 0.8,
          fontWeight: 500,
          textTransform: "capitalize",
          textAlign: "center",
          width: "100%",
        }}
      >
        {weather.weather[0].description}
      </Typography>
      {}
      <Typography
        variant="body1"
        sx={{
          opacity: 0.8,
          mt: 1,
          textAlign: "center",
        }}
      >
        H: {Math.round(weather.main.temp_max)}° L:{" "}
        {Math.round(weather.main.temp_min)}°
      </Typography>
    </Box>
  );
}
