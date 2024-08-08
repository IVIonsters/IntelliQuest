import React, { useState } from "react";
import style from "./Flipcard.module.css";

const Flipcard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div onClick={() => setFlipped(!flipped)} className="flipcard">
      <div className={`${style.flipCardInner} ${flipped ? style.flipped : ""}`}>
        <div className={style.flipCard} >
    
   
        {flipped ? (
          <div className="flipcardBack">
            <p>{answer}</p>
          </div>
        ) : (
          <div className="flipcardFront">
            <p>{question}</p>
          </div>
        )}
           </div>
            </div>
        </div>
  );
};

export default Flipcard;
