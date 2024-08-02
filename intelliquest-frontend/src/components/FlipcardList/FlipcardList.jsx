import React, { useEffect, useState } from "react";
import FlipCard from "../Flipcard/Flipcard";
import "./FlipcardList.module.css";
// Import static JSON data

// Edit Questions... Make Sub Categroies Topics

const FlipcardList = ({ topic }) => {
  const [flipcards, setFlipcards] = useState([]);

  useEffect(() => {
    // Filter flashcards based on the selected topic
    const filteredCards = flipcardsData.filter((card) => card.topic === topic);
    setFlipcards(filteredCards);
  }, [topic]);

  // Edit Question format with json
  [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" },
    { question: "Question 5", answer: "Answer 5" },
  ];

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
