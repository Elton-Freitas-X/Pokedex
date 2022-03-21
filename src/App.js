import React, { useEffect, useState } from "react";
import { getPokemon, getPokemonData } from "./services/api";
import "./App.css";
import Header from "./components/header";
import Pokedex from "./components/pokedex";
import Searchbar from "./components/searchbar";

function App() {
  const [loading, setLoading] = useState(false);

  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemon();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, []);

  return (
    <>
      <Header />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </>
  );
}

export default App;
