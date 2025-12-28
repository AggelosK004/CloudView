import React from "react";
import { Box, Typography } from "@mui/material";
import { CloudOff } from "@mui/icons-material";
export default function ErrorState({
  message
}) {
  const getFriendlyMessage = msg => {
    if (!msg) return "Something went wrong.";
    const lower = msg.toLowerCase();
    if (lower.includes("404") || lower.includes("not found")) return "We couldn't find that city. Please check the spelling.";
    if (lower.includes("network") || lower.includes("internet")) return "Please check your internet connection.";
    return msg.charAt(0).toUpperCase() + msg.slice(1);
  };
  return <Box sx={{
    textAlign: "center",
    mt: 8,
    p: 4,
    mx: 2,
    color: "white",
    background: "rgba(255, 50, 50, 0.15)",
    backdropFilter: "blur(10px)",
    borderRadius: "24px",
    border: "1px solid rgba(255, 200, 200, 0.2)",
    maxWidth: "400px",
    margin: "32px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2
  }}>
      <CloudOff sx={{
      fontSize: 60,
      opacity: 0.9
    }} />
      <Box>
        <Typography variant="h5" fontWeight="600" gutterBottom>
          Oops!
        </Typography>
        <Typography variant="body1" sx={{
        opacity: 0.9,
        lineHeight: 1.5
      }}>
          {getFriendlyMessage(message)}
        </Typography>
      </Box>
    </Box>;
}