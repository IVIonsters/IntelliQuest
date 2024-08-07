import React, { useEffect, useState } from "react";
import Flipcard from "../Flipcard/Flipcard";
// import "./Flipcard.module.css";
import flipcardsData from "../../utils/flipcards.json";

console.log (flipcardsData)

// import Flipcard from "../Flipcard/Flipcard";

// import hardCodedFlipcards from "../../utils/flipcards.json";

const FlipcardList = ({ topic }) => {
  const [flipcards, setFlipcards] = useState([]);

  useEffect(() => {
    // Filter data based on the selected topic
    const filteredCards = flipcards.filter((card) => card.topic === topic);
    setFlipcards(filteredCards);
  }, [topic]);


  console.log('flipcardsData:', flipcardsData); // Check if data is imported correctly



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
