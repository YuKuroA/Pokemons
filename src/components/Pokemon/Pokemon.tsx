import React, { useState } from "react";
import "./pokemon.css";
import { PokemonCard } from "../../components";

interface PokemonProps {
  name: string;
  imgUrl: string;
  type: string;
  onDelete: () => void;
}

export const Pokemon: React.FC<PokemonProps> = (props) => {
  const deletePokemon = () => {
    props.onDelete();
  };

  const [showCard, setShowCard] = useState(false);

  const handleOnClick = () => {
    setShowCard(true);
  };

  const handleOnClose = () => {
    setShowCard(false);
  };

  const pCard = (
    <div>
      <div className="pokemon" onClick={handleOnClick}>
        <div className="name">{props.name}</div>
        <div className="photo">
          <img src={props.imgUrl} alt="Pokemon image" />
        </div>
        <div className="type">{props.type}</div>
        <div className="controls">
          <button onClick={deletePokemon}>Delete</button>
        </div>
      </div>
      {showCard && (
        <PokemonCard
          imgUrl={props.imgUrl}
          name={props.name}
          type={props.type}
          onClose={handleOnClose}
        />
      )}
    </div>
  );
  return pCard;
};
