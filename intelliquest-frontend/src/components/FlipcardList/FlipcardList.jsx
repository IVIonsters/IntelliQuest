import React, { useEffect, useState } from "react";
import Flipcard from "../Flipcard/Flipcard";
// import "./Flipcard.module.css";

const FlipcardList = ({ topic }) => {
  const [flipcards, setFlipcards] = useState([]);

  useEffect(() => {
    fetch ("http://localhost:5001/api/flipcards")
 .then (res => res.json ()) 
 .then (data => {

  console.log (data)
  const filteredCards = data.filter((card) => card.topic === topic);
  setFlipcards(filteredCards);

  console.log (flipcards)
  
 })

  }, [topic]);


  return (
    <div>
      {flipcards [0] && flipcards [0] .questions.length > 0 ? (
        flipcards [0].questions.map((card, index) => (
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
