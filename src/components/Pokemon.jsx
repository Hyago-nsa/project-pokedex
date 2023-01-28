import React from "react";
import { useContext } from "react";
import FavoriteContext from "../assets/contexts/favoritesContext";
import "./Pokemon.css";

const Pokemon = ({ pokemon }) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";

  // console.log(pokemon);
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          className="pokemon-image"
          alt={pokemon.name}
          src={pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]}
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((types, index) => {
              return (
                <div className="pokemon-type-text" key={index}>
                  {types.type.name}
                </div>
              );
            })}
          </div>
          <button className="heart" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
