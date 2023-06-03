import { useEffect, useState } from "react";
import Pokemon from './Pokemon';

export default function PokemonSearch() {
  const [searchInput, setSearchInput] = useState('');
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    if (searchInput) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
        .then(res => res.json())
        .then(data => setPokemonList([...pokemonList, data]));
    }
  }, [searchInput]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    setSearchInput(e.target.elements['search'].value);
  }

  return (
    <div className="PokemonSearch">
      <form onSubmit={handleSearchSubmit}>
        <input type="text" id="search" />
      </form>
      <p>Search Result for '{searchInput}'</p>
      <div className="row row-cols-5">
        {pokemonList.map(pokemon => <Pokemon pokemon={pokemon} />)}
      </div>
    </div>
  );
}
