import React, { useState } from "react";
import { useContext } from "react";
import FavoriteContext from "../assets/contexts/favoritesContext";
import Pagination from "./Pagination";
import "./Searchbar.css";

const Searchbar = ({ onSearch }) => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <div className="searchbar-nav">
          <h1>Pokemon name</h1>
          <div className="heart-nav">❤️{favoritePokemons.length}</div>
        </div>

        <input placeholder="" onChange={onChangeHandler} />
        <button onClick={onButtonClickHandler}>🔍</button>
      </div>
    </div>
  );
};

export default Searchbar;
