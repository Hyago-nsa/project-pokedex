import React from "react";
import Pagination from "./Pagination";
import "./Pokedex.css";
import Pokemon from "./Pokemon";
const Pokedex = ({ pokemons, loading, page, setPage, totalPages }) => {
  // console.log(pokemons);

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
    console.log("anterior");
  };

  const onRightClickHandler = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
    console.log("proximo");
  };
  return (
    <div>
      <div className="pokedex-header">
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div className="carregando">Carregando</div>
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
