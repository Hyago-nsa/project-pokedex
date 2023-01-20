import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "./api";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async(pokemon)=>{
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises)

      setPokemons(results);
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
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
};

export default App;
