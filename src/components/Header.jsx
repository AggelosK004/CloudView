import React from "react";
import { Box, Typography } from "@mui/material";
export default function Header() {
  return <Box sx={{
    textAlign: "center",
    pt: {
      xs: 8,
      sm: 2
    },
    pb: 2,
    px: 2
  }}>
      <Typography variant="h1" sx={{
      fontWeight: 750,
      fontSize: {
        xs: "2.5rem",
        sm: "3rem",
        md: "3.5rem"
      },
      letterSpacing: {
        xs: "0.1em",
        md: "0.15em"
      },
      color: "white",
      textShadow: "0 4px 12px rgba(0,0,0,0.3)",
      width: "100%",
      wordBreak: "break-word",
      lineHeight: 1.2
    }}>
        CLOUDVIEW
      </Typography>
    </Box>;
}