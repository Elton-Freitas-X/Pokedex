import React from "react";
import "./style.css";
import Pokemon from "../cardpokemon";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  return (
    <div className="pokedex__header">
     <div className="header__pagina">
        <h1>Pokedex</h1>
        <div>Paginação</div>
     </div>

      {loading ? (
        <strong>Carregando, segura fera</strong>
      ) : (
        <div className="pokedex__grid">
          {pokemons && pokemons.map((pokemon, index) => {
            return (
             <Pokemon key={index} pokemon={pokemon}/>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
