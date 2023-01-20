import React, { useEffect, useState } from "react";
import { getPokemons } from "./api";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const result = await getPokemons();
      setPokemons(result);
      setLoading(false);
    } catch (error) {
      console.log("Error no fetchPokemons : ", error);
    }
  };

  useEffect(() => {
    console.log("Carregou!");
    fetchPokemons();
  }, []);

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons.results} loading={loading} />
    </div>
  );
};

export default App;
