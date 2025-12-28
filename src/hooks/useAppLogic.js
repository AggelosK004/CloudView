import { useState, useMemo, useEffect } from "react";
import { useWeather } from "./useWeather";
import { useFavorites } from "./useFavorites";
import { getWeather } from "../services/WeatherService";

export function useAppLogic() {
  const { weatherData, forecastData, loading, error, fetchAll, fetchByCoords } =
    useWeather();
  const { favorites, toggleFavorite, removeFavorite, isFavorite } =
    useFavorites();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [dialogOpen, setDialogOpen] = useState(false);

  const [isLocationSearch, setIsLocationSearch] = useState(false);
  const [savedLocation, setSavedLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsLocationSearch(true);
          fetchByCoords(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.log("Auto-location skipped:", error.message);
        }
      );
    }
  }, []);

  const getUserLocation = () => {
    if (savedLocation) {
      fetchAll(savedLocation);
      return;
    }

    const fallbackToIp = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.latitude && data.longitude) {
          setIsLocationSearch(true);
          fetchByCoords(data.latitude, data.longitude);
        } else {
          throw new Error("No IP coords");
        }
      } catch (err) {
        setSnackbar({ open: true, message: "Could not detect location." });
      }
    };

    if (!navigator.geolocation) {
      fallbackToIp();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocationSearch(true);
        fetchByCoords(pos.coords.latitude, pos.coords.longitude);
      },
      () => fallbackToIp(),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  const updateManualLocation = async (city) => {
    await getWeather(city);
    setSavedLocation(city);
    fetchAll(city);
  };

  useEffect(() => {
    if (weatherData && isLocationSearch && !loading && !error) {
      setSnackbar({ open: true, message: `Detected: ${weatherData.name}` });
      setIsLocationSearch(false);
    }
  }, [weatherData, isLocationSearch, loading, error]);

  const openDialog = () => {
    setSnackbar({ ...snackbar, open: false });
    setDialogOpen(true);
  };
  const closeDialog = () => setDialogOpen(false);
  const closeSnackbar = () => setSnackbar({ ...snackbar, open: false });

  const bgColors = useMemo(() => {
    // Default Empty State
    if (!weatherData) return { top: "#0f172a", bottom: "#1d4ed8" };

    const id = weatherData.weather[0].id;
    const isNight = weatherData.weather[0].icon.includes("n");

    // === 🌑 NIGHT PALETTES (Darker, Moodier) ===
    if (isNight) {
      // Night Thunder: Pitch Black -> Deep Purple
      if (id >= 200 && id < 300) return { top: "#0f0518", bottom: "#581c87" };

      // Night Drizzle: Dark Teal -> Muted Green
      if (id >= 300 && id < 400) return { top: "#022c22", bottom: "#115e59" };

      // Night Rain: Very Dark Navy -> Dark Slate
      if (id >= 500 && id < 600) return { top: "#020617", bottom: "#1e293b" };

      // Night Snow: Midnight Blue -> Cold Steel
      if (id >= 600 && id < 700) return { top: "#0f172a", bottom: "#334155" };

      // Night Fog: Black -> Dark Gray
      if (id >= 700 && id < 800) return { top: "#000000", bottom: "#374151" };

      // Night Clear: Deep Space -> Indigo
      if (id === 800) return { top: "#020617", bottom: "#312e81" };

      // Night Clouds: Dark Gray -> Midnight Blue
      return { top: "#0f172a", bottom: "#535172ff" };
    }

    // === ☀️ DAY PALETTES (Vibrant, High Contrast) ===

    // Thunder: Midnight Blue -> Electric Violet
    if (id >= 200 && id < 300) return { top: "#1e1b4b", bottom: "#7c3aed" };

    // Drizzle: Deep Green-Blue -> Bright Teal
    if (id >= 300 && id < 400) return { top: "#115e59", bottom: "#2dd4bf" };

    // Rain: Navy Blue -> Steel Grey
    if (id >= 500 && id < 600) return { top: "#172554", bottom: "#94a3b8" };

    // Snow: Slate Grey -> Bright Ice White
    if (id >= 600 && id < 700) return { top: "#334155", bottom: "#e2e8f0" };

    // Fog: Dark Gray -> Hazy Silver
    if (id >= 700 && id < 800) return { top: "#374151", bottom: "#cbd5e1" };

    // Clear: Deep Azure -> Bright Cyan
    if (id === 800) return { top: "#0369a1", bottom: "#78afcfff" };

    // Clouds: Cool Gray -> Light Blue-Gray
    if (id > 800) return { top: "#2a313aff", bottom: "#74acecff" };

    // Fallback
    return { top: "#1e3a8a", bottom: "#3b82f6" };
  }, [weatherData]);

  return {
    state: {
      weatherData,
      forecastData,
      loading,
      error,
      drawerOpen,
      bgColors,
      favorites,
      snackbar,
      dialogOpen,
    },
    actions: {
      fetchAll,
      toggleFavorite,
      removeFavorite,
      isFavorite,
      setDrawerOpen,
      getUserLocation,
      closeSnackbar,
      openDialog,
      closeDialog,
      updateManualLocation,
    },
  };
}
