import React, { useState } from "react";
import "./Searchbar.css";

const Searchbar = (props) => {
  const onSearch = props.onSearch;
  const [searchPokemon, setSearchPokemon] = useState("");

  const onChangeHandler = (event) => {
    setSearchPokemon(event.target.value);
  };

  const onButtonClickHandler = () => {
    onSearch(searchPokemon);
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
