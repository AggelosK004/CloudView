import React, { useState } from "react";
import { Paper, IconButton, InputBase, Divider } from "@mui/material";
import { Search as SearchIcon, MyLocation } from "@mui/icons-material";
export default function SearchBar({ onSubmit, onLocationClick }) {
  const [term, setTerm] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (term.trim()) {
      onSubmit(term);
      setTerm("");
    }
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length === 1 && value === " ") return;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setTerm(value);
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSearch}
      elevation={0}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 400,
        mx: "auto",
        mb: 2,
        borderRadius: "30px",
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
        backdropFilter: "blur(20px) saturate(120%)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: `
          inset 0 1px 2px rgba(255, 255, 255, 0.3),
          inset 0 -1px 2px rgba(0, 0, 0, 0.05),
          0 8px 32px rgba(0, 0, 0, 0.15)
        `,
        transition: "all 0.3s ease-in-out",
        "&:focus-within": {
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: `
            inset 0 1px 2px rgba(255, 255, 255, 0.3),
            0 12px 40px rgba(0, 0, 0, 0.25)
          `,
        },
      }}
    >
      <IconButton
        sx={{
          p: "10px",
          color: "rgba(255,255,255,0.7)",
          transition: "color 0.2s",
          "&:hover": { color: "white" },
        }}
        aria-label="search"
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          color: "white",
          fontWeight: 500,
          "& input::placeholder": {
            color: "rgba(255,255,255,0.6)",
            opacity: 1,
          },
        }}
        placeholder="Search City..."
        value={term}
        onChange={handleInputChange}
      />
      <Divider
        sx={{ height: 28, m: 0.5, bgcolor: "rgba(255,255,255,0.2)" }}
        orientation="vertical"
      />
      <IconButton
        sx={{
          p: "10px",
          color: "white",
          transition: "transform 0.2s",
          "&:hover": { transform: "scale(1.1)" },
        }}
        onClick={onLocationClick}
        title="Use my location"
      >
        <MyLocation />
      </IconButton>
    </Paper>
  );
}
