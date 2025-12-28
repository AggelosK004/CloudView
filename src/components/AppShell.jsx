import React from "react";
import { Box, CssBaseline, GlobalStyles } from "@mui/material";
const SYSTEM_FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
export default function AppShell({
  children,
  colors
}) {
  return <Box sx={{
    height: "100vh",
    "--bg-top": colors.top,
    "--bg-btm": colors.bottom,
    background: "linear-gradient(180deg, var(--bg-top), var(--bg-btm))",
    transition: "--bg-top 2s ease, --bg-btm 2s ease",
    overflow: "hidden",
    position: "relative",
    "::selection": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "white"
    }
  }}>
      <CssBaseline />
      <style>
        {`
          @property --bg-top { syntax: '<color>'; inherits: false; initial-value: #0f172a; }
          @property --bg-btm { syntax: '<color>'; inherits: false; initial-value: #1e3a8a; }
        `}
      </style>
      <GlobalStyles styles={{
      body: {
        fontFamily: SYSTEM_FONT
      },
      ".MuiTypography-root, .MuiButton-root, .MuiInputBase-root, .MuiFormLabel-root, .MuiAlert-root": {
        fontFamily: `${SYSTEM_FONT} !important`
      },
      "*::-webkit-scrollbar": {
        width: "0.4em"
      },
      "*::-webkit-scrollbar-track": {
        background: "transparent"
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: "4px"
      }
    }} />
      <Box sx={{
      height: "100%",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
        <Box sx={{
        width: "100%",
        maxWidth: {
          xs: "100%",
          sm: "500px",
          md: "600px"
        },
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        px: {
          xs: 2,
          md: 0
        },
        pt: {
          xs: 2,
          md: 4
        }
      }}>
          {children}
        </Box>
      </Box>
    </Box>;
}