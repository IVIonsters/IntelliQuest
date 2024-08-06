import React, { useEffect, useState } from "react";
import Flipcard from "../Flipcard/Flipcard";
import "./Flipcard.module.css";
import hardCodedFlipcards from "../../utils/flipcards.json";

const FlipcardList = ({ topic }) => {
  console.log(topic);

  const [flipcards, setFlipcards] = useState(hardCodedFlipcards);
  const [additionalFlipcards, setAdditionalFlipcards] = useState([]);

  console.log(flipcards);

  useEffect(() => {
    // Filter hard-coded flipcards based on the selected topic
    const filteredCards = flipcards.filter((card) => card.topic === topic);

    setFlipcards(filteredCards);
  }, [topic]);

  console.log(flipcards);

  //const fetchAdditionalFlipcards = async () => {
  //   try {
  //     const response = await fetch('api'); // Replace with API endpoint (i.e., Brainscape, Quizlet, etc.)
  //     const data = await response.json();
  //     setAdditionalFlipcards(data.filter(card => card.topic === topic));
  //   } catch (error) {
  //     console.error("Error fetching additional flipcards:", error);
  //   }
  // };

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

      {/* {additionalFlipcards.length > 0 && (
        additionalFlipcards.map((card, index) => (
          <Flipcard key={index + flipcards.length} question={card.question} answer={card.answer} />
        ))
      )}
        
      <button onClick={fetchAdditionalFlipcards}>Load More Flipcards</button> */}
    </div>
  );
};

export default FlipcardList;
