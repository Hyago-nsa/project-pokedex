import React, { useState } from "react";
import "./Searchbar.css";

const Searchbar = ({onSearch}) => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0 ){
      onSearch(undefined)
    }
  };
  
  const onButtonClickHandler = () => {
    onSearch(search);
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
