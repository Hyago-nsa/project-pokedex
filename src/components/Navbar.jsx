import React from "react";
import { useContext } from "react";
import FavoriteContext from "../assets/contexts/favoritesContext";
import "./Navbar.css"

const Navbar = () => {
  const {favoritePokemons} = useContext(FavoriteContext)
  return (
    <nav>
      <img
        className="logo"
        alt="PokéAPI"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
      />
      <div>❤️{favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;
