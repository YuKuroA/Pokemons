import React from "react";
import './CreationForm.css'
import { IPokemon } from "../../types/pokemon.models";

interface FormProps {
    addPokemon: (pokemon : IPokemon) => void
    closeModal: () => void
}

const CreationForm: React.FC<FormProps> = ({closeModal, addPokemon}) => {

    const createPokemon = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setTimeout(() => {
            console.log('close');
            closeModal()
        })
        
        const target = event.target as typeof event.target & {
            pokemonName: { value: string };
            pokemonImg: { value: string };
            pokemonType: { value: string };
        };

        console.log('add pokemon')

        addPokemon(
            {
                id: crypto.randomUUID(),
                name: target.pokemonName.value,
                imageUrl: target.pokemonImg.value,
                type: target.pokemonType.value,
                abilities: [target.pokemonName.value],
                level: Math.random() % 999,
                evolution: [target.pokemonName.value]
            }
        );

        // closeModal();
    } 

    return (
        <div className="creation-form">

            <form name="pokemonData" onSubmit={createPokemon}>
                <label onClick={closeModal}>
                    <div className="close">X</div>
                </label>

                <div className="fields">
                    <div className="form-field">
                        <input type="text" placeholder="Enter pokemon name" name="pokemonName" />
                    </div>
                    <div className="form-field">
                        <input type="text" placeholder="Enter image URL" name="pokemonImg" />
                    </div>
                    <div className="form-field">
                        <input type="text" placeholder="Enter pokemon type" name="pokemonType" />
                    </div>
                </div>
                
                <div className="controls">
                    <button type="submit">Submit</button>
                </div>
            </form>
            
            <label onClick={closeModal}>
                <div className="layer"></div>
            </label>
        </div>
    )
}

export default CreationForm