import { useState } from "react";
import pokemons from "../../mock/pokemons.json";
import { PokemonInfo } from "../../models";
import { Header, PokemonList, CreationForm } from "../../components";

export const Pokemons = () => {
  const [showForm, setShowForm] = useState(false);
  const [pokemonsList, setPokemonsList] = useState(pokemons);

  const addPokemon = (pokemon: PokemonInfo) => {
    const newPokemons = pokemonsList.concat();
    newPokemons.push(pokemon);
    setPokemonsList(newPokemons);
  };

  const deletePokemon = (id: string) => {
    setPokemonsList(pokemonsList.filter((pokemon) => pokemon.id !== id));
  };

  const openModal = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  return (
    <div>
      <Header openModal={openModal} />
      <PokemonList pokemonsList={pokemonsList} deletePokemon={deletePokemon} />
      {showForm && (
        <CreationForm closeModal={closeModal} addPokemon={addPokemon} />
      )}
    </div>
  );
};
