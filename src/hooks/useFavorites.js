import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('weatherFavorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('weatherFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  };

  const removeFavorite = (city) => {
    setFavorites(favorites.filter((c) => c !== city));
  };

  const toggleFavorite = (city) => {
    if (favorites.includes(city)) {
      removeFavorite(city);
    } else {
      addFavorite(city);
    }
  };

  const isFavorite = (city) => favorites.includes(city);

  return { 
    favorites, 
    addFavorite, 
    removeFavorite, 
    toggleFavorite, 
    isFavorite 
  };
}