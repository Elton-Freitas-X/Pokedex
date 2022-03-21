import React from 'react';
import './style.css';

const Header = () => {
    const logoPokemon = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
    <nav>
        <img    
            alt='pokeapi-logo' 
            src={logoPokemon} 
            className='poke__logo'
        /> 
    </nav>
  )
}
export default Header;