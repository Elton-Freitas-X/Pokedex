import React from "react";
import "./style.css";
import Pokemon from "../cardpokemon";
import Pagination from "../pagination";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  const onLeftClick = () => {
    if (page > 0) {
      setPage(page-1);
    }
  };
  const onRightClick = () => {
    if (page+1 !== totalPages) {
      setPage(page+1);
    }
  };

  return (
    <div className="pokedex__header">
      <div className="header__pagina">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
        />
      </div>

      {loading ? (
        <strong>Carregando, segura fera</strong>
      ) : (
        <div className="pokedex__grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
