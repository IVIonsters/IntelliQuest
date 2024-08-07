import React, { useState } from 'react';
import './Flipcard.module.css';

const Flipcard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div onClick={() => setFlipped(!flipped)} className="flipcard">
      <div className={`flipcard-inner ${flipped ? 'flipped' : ''}`}>
        <div className="flipcard-front">
          <p>{question}</p>
        </div>
        <div className="flipcard-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;
