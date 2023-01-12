import React, { useState } from "react";
import { searchPokemon } from "../api";
import "./Searchbar.css";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState("");

  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  };
  
  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Search pokemon" onChange={onChangeHandler} />
        <button onClick={onButtonClickHandler}>Search</button>
        {pokemon ? (
          <div>
            <div>{pokemon.name}</div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Searchbar;
