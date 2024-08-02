import React, { useEffect, useState } from "react";
import Flipcard from "../Flipcard/Flipcard";
import flipcardsData from "../../data/flipcards.json";


//  Add more hardcoded flashcards 
const hardCodedFlipcards = [
  { question: "?", answer: "Answer", topic: "Topic" },
  { question: "?", answer: "Answer", topic: "Topic" },
];

const FlipcardList = ({ topic }) => {
  const [flipcards, setFlipcards] = useState([]);
  const [additionalFlipcards, setAdditionalFlipcards] = useState([]);

  useEffect(() => {
    // Filter flashcards based on the selected topic
    const filteredCards = flipcardsData.filter((card) => card.topic === topic);
    setFlipcards(filteredCards);
  }, [topic]);

  return (
    <div className="flip-card-list">
      {flipcards.length > 0 ? (
        flipcards.map((card, index) => (
          <Flipcard key={index} question={card.question} answer={card.answer} />
        ))
      ) : (
        // Display a message if no flipcards are available for the selected topic
        <p>No flashcards available for this topic.</p>
      )}
    </div>
  );
};

export default FlipcardList;
