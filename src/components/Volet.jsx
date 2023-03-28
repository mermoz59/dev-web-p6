import React, { useState } from 'react';
import '../style/Volet.scss';
import arrowUp from '../assets/arrow-top.png'
import arrowDown from '../assets/arrow-down.png'

function Volet({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={handleToggle}>
        <h3>{title}</h3>
        <img src={isOpen ? arrowUp : arrowDown } alt="collapse-icon" />
      </div>
      {isOpen && (
        <div className="collapse__content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Volet;