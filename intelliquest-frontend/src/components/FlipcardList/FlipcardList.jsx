import React, { useEffect, useState } from "react";
import Flipcard from "../Flipcard";
// import "./Flipcard.module.css";
import flipcardsData from "../../utils/flipcards.json";

// import Flipcard from "../Flipcard/Flipcard";

// import hardCodedFlipcards from "../../utils/flipcards.json";

console.log(flipcards);

const FlipcardList = ({ topic }) => {
  const [flipcards, setFlipcards] = useState([]);

  useEffect(() => {
    // Filter example data based on the selected topic
    const filteredCards = flipcards.filter((card) => card.topic === topic);
    setFlipcards(filteredCards);
  }, [topic]);

  return (
    <div>
      {flipcards.length > 0 ? (
        flipcards.map((card, index) => (
          <Flipcard key={index} question={card.question} answer={card.answer} />
        ))
      ) : (
        // Display a message if no flipcards are available for the selected topic
        <p>No flipcards available for this topic.</p>
      )}
    </div>
  );
};

export default FlipcardList;
