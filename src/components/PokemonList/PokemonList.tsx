import React from "react";
import "./PokemonList.css";
import { PokemonInfo } from "../../models";
import { Pokemon } from "../../components";

interface PokemonListProps {
  pokemonsList: PokemonInfo[];
  deletePokemon: (id: string) => void;
}

export const PokemonList: React.FC<PokemonListProps> = ({
  pokemonsList,
  deletePokemon,
}) => {
  return (
    <div className="pokemons">
      {pokemonsList.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          imgUrl={pokemon.imageUrl}
          type={pokemon.type}
          onDelete={() => deletePokemon(pokemon.id)}
        />
      ))}
    </div>
  );
};
