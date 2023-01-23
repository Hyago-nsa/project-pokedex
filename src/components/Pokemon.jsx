import React from "react";
import "./Pokemon.css"

const Pokemon = ({ pokemon }) => {
  const onHeartClick=()=>{
    console.log("favoritado")
  }


  console.log(pokemon);
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          className="pokemon-image"
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
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
          <button className="pokemon-heart-btn" onClick={onHeartClick}>💖</button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
