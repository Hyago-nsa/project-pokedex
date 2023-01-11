import React from "react";
import { searchPokemon } from "./api";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

const App = () => {
  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon)
    console.log(result)
  };

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar onSearch={onSearchHandler} />
      </div>
    </div>
  );
};

export default App;
