import React from "react";
import Pagination from "./Pagination";
import "./Pokedex.css";
import Pokemon from "./Pokemon";
const Pokedex = ({ pokemons, loading }) => {
  console.log(pokemons);
  return (
    <div>
      <div className="pokedex-header">
        <h1> Pokedex</h1>
        <Pagination />
      </div>
      {loading ? (
        <div>Carregando</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
