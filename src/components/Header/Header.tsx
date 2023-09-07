import React from "react";
import "./Header.css";

interface HeaderProps {
  openModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ openModal }) => {
  return (
    <header>
      <label onClick={openModal}>
        <div className="add-pokemon">+ Add Pokemon</div>
      </label>
    </header>
  );
};
