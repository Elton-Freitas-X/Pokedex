import React, { useEffect, useState } from "react";
import { getPokemon, getPokemonData } from "./services/api";
import "./App.css";
import Header from "./components/header";
import Pokedex from "./components/pokedex";
import Searchbar from "./components/searchbar";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(3);

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 30

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemon(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <>
      <Header />
      <Searchbar />
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </>
  );
}

export default App;
