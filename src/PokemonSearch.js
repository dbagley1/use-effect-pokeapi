import { useEffect, useState } from "react";
import Pokemon from './Pokemon';

export default function PokemonSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchQueryInput, setSearchQueryInput] = useState('');
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
        .then(res => res.json())
        .then(data => setPokemonList(pokemonList => [...pokemonList, data]));
    }
  }, [searchQuery]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    setSearchQuery(searchQueryInput);
  }

  function handleSearchInput(e) {
    setSearchQueryInput(e.target.value);
  }

  return (
    <div className="PokemonSearch">
      <form onSubmit={handleSearchSubmit}>
        <input type="text" id="search" onChange={handleSearchInput} value={searchQueryInput} />
      </form>
      <p>Search Result for '{searchQuery}'</p>
      <div className="row row-cols-5">
        {pokemonList.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    </div>
  );
}
