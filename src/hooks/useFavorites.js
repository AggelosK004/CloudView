import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("weatherFavorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("weatherFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (city) => {
    setFavorites((prev) =>
    prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const removeFavorite = (city) =>
  setFavorites((prev) => prev.filter((c) => c !== city));
  const isFavorite = (city) => favorites.includes(city);

  return { favorites, toggleFavorite, removeFavorite, isFavorite };
}