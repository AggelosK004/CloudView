import React, { useState } from "react";
import {
  Box,
  IconButton,
  Snackbar,
  Alert,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { Menu as MenuIcon, LocationOn } from "@mui/icons-material";
import Header from "./Header";
import SearchBar from "./SearchBar";
import WeatherContent from "./WeatherContent";
import Footer from "./Footer";
import FavoritesDrawer from "./FavoritesDrawer";
export default function MainLayout({ state, actions }) {
  const [manualCity, setManualCity] = useState("");
  const [inputError, setInputError] = useState(false);
  const glassStyle = {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
    backdropFilter: "blur(20px) saturate(120%)",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: `
      inset 0 1px 2px rgba(255, 255, 255, 0.3),
      inset 0 -1px 2px rgba(0, 0, 0, 0.05),
      0 8px 32px rgba(0, 0, 0, 0.15)
    `,
    color: "white",
  };
  const handleManualSubmit = async () => {
    if (!manualCity.trim()) return;
    try {
      setInputError(false);
      await actions.updateManualLocation(manualCity);
      actions.closeDialog();
      setManualCity("");
    } catch (error) {
      setInputError(true);
    }
  };
  return (
    <>
      {!state.drawerOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 1300,
          }}
        >
          <IconButton
            onClick={() => actions.setDrawerOpen(true)}
            sx={{
              color: "white",
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
                0 8px 32px rgba(0, 0, 0, 0.15)
              `,
              "&:hover": {
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      )}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Header />
        <Box
          sx={{ mt: state.weatherData ? 0 : 4, transition: "all 0.5s ease" }}
        >
          <SearchBar
            onSubmit={actions.fetchAll}
            onLocationClick={actions.getUserLocation}
          />
        </Box>
        <WeatherContent state={state} actions={actions} />
      </Box>
      <Footer />
      <FavoritesDrawer
        open={state.drawerOpen}
        onClose={() => actions.setDrawerOpen(false)}
        favorites={state.favorites}
        onSelect={actions.fetchAll}
        onRemove={actions.removeFavorite}
      />
      <Snackbar
        open={state.snackbar.open}
        autoHideDuration={6000}
        onClose={actions.closeSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={actions.closeSnackbar}
          severity="info"
          variant="standard"
          icon={<LocationOn sx={{ color: "white" }} />}
          sx={{
            width: "100%",
            ...glassStyle,
            color: "white",
            "& .MuiAlert-icon": { color: "white" },
          }}
          action={
            <Button
              color="inherit"
              size="small"
              onClick={actions.openDialog}
              sx={{ fontWeight: 600 }}
            >
              Wrong City?
            </Button>
          }
        >
          {state.snackbar.message}
        </Alert>
      </Snackbar>
      <Dialog
        open={state.dialogOpen}
        onClose={() => {
          actions.closeDialog();
          setInputError(false);
        }}
        slotProps={{
          paper: {
            sx: {
              ...glassStyle,
              minWidth: 300,
            },
          },
        }}
      >
        <DialogTitle sx={{ color: "white" }}>Set Correct Location</DialogTitle>
        <DialogContent>
          {}
          <TextField
            autoFocus
            margin="dense"
            label="Enter your city"
            color="white"
            type="text"
            fullWidth
            variant="standard"
            value={manualCity}
            error={inputError}
            helperText={inputError ? "City not found." : ""}
            slotProps={{
              inputLabel: {
                sx: { color: "rgba(255,255,255,0.7)" },
              },
              input: {
                sx: {
                  color: "white",
                  "&:before": { borderBottomColor: "rgba(255,255,255,0.3)" },
                  "&:after": { borderBottomColor: "white" },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottomColor: "white",
                  },
                },
              },
            }}
            onChange={(e) => {
              setManualCity(e.target.value);
              if (inputError) setInputError(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleManualSubmit()}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              actions.closeDialog();
              setInputError(false);
            }}
            sx={{
              color: "rgba(255,255,255,0.6)",
              "&:hover": { color: "white" },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleManualSubmit}
            variant="contained"
            sx={{
              bgcolor: "rgba(255,255,255,0.2)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
