import React, { useState } from "react";
import "./Searchbar.css";

const Searchbar = () => {
  const [searchPokemon, setSearchPokemon] = useState("");

  const onChangeHandler = (event) => {
    setSearchPokemon(event.target.value);
  };

  const onButtonClickHandler = () => {
    console.log(searchPokemon);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Search pokemon" onChange={onChangeHandler} />
        <button onClick={onButtonClickHandler}>Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
