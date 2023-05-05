import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { PokemonList } from "../../components/PokemonList/PokemonList";
import CreationForm from "../../components/CreationForm/CreationForm";
import pokemons from '../../mock/pokemons.json'
import { IPokemon } from "../../types/pokemon.models";


export const Pokemons = () => {
    const [showForm, setShowForm] = useState(false);
    const [pokemonsList, setPokemonsList] = useState(pokemons);
  
    const addPokemon = (pokemon : IPokemon) => {
        const newPokemons = pokemonsList.concat();
        newPokemons.push(pokemon);
        setPokemonsList(newPokemons);
    }

    const deletePokemon = (id:string) => {
      setPokemonsList(pokemonsList.filter(pokemon => pokemon.id !== id));
    }
    
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
            {showForm && <CreationForm closeModal={closeModal} addPokemon={addPokemon} />}
        </div>
    );
}