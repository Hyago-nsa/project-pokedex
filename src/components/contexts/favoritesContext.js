import React, { createContext } from "react";

const favoritesContext = createContext({
  favoritePokemon: [],
  updateFavoritePokemon: (id) => null,
});

export const favoriteProvider = favoritesContext.Provider;

export default favoritesContext;
