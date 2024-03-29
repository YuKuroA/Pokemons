import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import './PokemonList.css'
import { IPokemon } from '../../types/pokemon.models';

interface PokemonListProps {
  pokemonsList: IPokemon[],
  deletePokemon: (id:string) => void
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemonsList, deletePokemon }) => {
    return (
      <div className='pokemons'>
        {pokemonsList.map(pokemon => <Pokemon key={pokemon.id} name={pokemon.name} imgUrl={pokemon.imageUrl} type={pokemon.type} onDelete={() => deletePokemon(pokemon.id)} />)}
      </div>
    );
}