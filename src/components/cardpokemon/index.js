import React from "react";
import "./style.css"

const Pokemon = (props) => {
  const { pokemon } = props;
  const onHeartClick = () => {
    console.log("pode favoritar")
  }
  const heart = '❤'
 
  return (
    <div className="pokemon__card">
      <div className="pokemon__img__container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon__img"
        />
      </div>
      <div className="card__body">
        <div className="card__top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card__bottom">
          <div className="pokemon__type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon__type__text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button className="pokemon__btn" onClick={onHeartClick}>{heart}</button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
