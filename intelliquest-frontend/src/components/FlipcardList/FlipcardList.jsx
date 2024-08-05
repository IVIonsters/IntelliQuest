import React, { useEffect, useState } from "react";
import Flipcard from "../Flipcard/Flipcard";
import styles from "../FlipcardList.module.css";
import hardCodedFlipcards from "../../data/flipcards.json"


// import data from "..//..data/flipcards.json";

const hardCodedFlipcards = [
  { question: "?", answer: "Answer", topic: "Topic" },
  { question: "?", answer: "Answer", topic: "Topic" },
];

const FlipcardList = ({ topic }) => {
  const [flipcards, setFlipcards] = useState([]);
  const [additionalFlipcards, setAdditionalFlipcards] = useState([]);

  useEffect(() => {
    // Filter hard-coded flipcards based on the selected topic
    const filteredCards = hardCodedFlipcards.filter(
      (card) => card.topic === topic
    );
    
    
  setFlipcards(filteredCards);
  }, [topic]);

const fetchAdditionalFlipcards = async(); => {
  try {
    const response = await fetch('api'); // Replace with API endpoint (i.e., Brainscape, Quizlet, etc.)
    const data = await response.json();
    setAdditionalFlipcards(data.filter(card => card.topic === topic));
  } catch (error) {
    console.error("Error fetching additional flipcards:", error);
  }
};

  return (
    <div className={styles.flipcardList}>
      {flipcards.length > 0 ? (
        flipcards.map((card, index) => (
          <Flipcard key={index} question={card.question} answer={card.answer} />
        ))
      ) : (
              // Display a message if no flipcards are available for the selected topic
        <p>No flipcards available for this topic.</p>
      )}

      {additionalFlipcards.length > 0 && (
        additionalFlipcards.map((card, index) => (
          <Flipcard key={index + flipcards.length} question={card.question} answer={card.answer} />
        ))
      )}

      <button onClick={fetchAdditionalFlipcards}>Load More Flipcards</button>
    </div>
  );
};

export default FlipcardList;

