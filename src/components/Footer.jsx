import React from "react";
import { Box, Typography } from "@mui/material";
export default function Footer() {
  return <Box component="footer" sx={{
    py: 4,
    textAlign: "center",
    opacity: 0.6,
    mt: "auto"
  }}>
      <Typography variant="caption" sx={{
      letterSpacing: 1
    }}>
        Made by Aggelos Kolitsis
      </Typography>
    </Box>;
}