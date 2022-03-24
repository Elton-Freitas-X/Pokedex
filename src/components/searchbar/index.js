import React, { useState } from "react";
import { searchPokemon } from "../../services/api";
import "./style.css";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (e) => {
    console.log("pokemon: ", search);
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandle(search);
  };

  const onSearchHandle = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <div className="searchbar__container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
      </div>
      <div className="seachbar__btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
      {pokemon ? (
        <div>
          <div className="searchBtn__name">Nome: {pokemon.name}</div>
          <div className="searchBtn__weight">Peso: {pokemon.weight}</div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
