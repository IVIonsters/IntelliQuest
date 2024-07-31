import React, { useState } from 'react';
import './FlipCard.css';


// props... reconfig (useState)

import React, { useState } from 'react';
import './FlipCard.css';

const FlipCard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {question}
        </div>
        <div className="flip-card-back">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
