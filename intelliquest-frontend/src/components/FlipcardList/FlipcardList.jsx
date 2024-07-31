import React from 'react';
import FlipCard from '../Flipcard/Flipcard';
import './FlipcardList.module.css';



/// Edit Questions... Make Sub Categroies... 
// JavaScript, CSS+HTML, Github, APIS, jq, JSON, SQL, NoSQL, React... 
const FlipCardList = () => {
  const cards = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    { question: 'Question 3', answer: 'Answer 3' },
    { question: 'Question 4', answer: 'Answer 4' },
    { question: 'Question 5', answer: 'Answer 5' },
  ];

  return (
    <div className="flip-card-list">
      {cards.map((card, index) => (
        <FlipCard key={index} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
};

export default FlipCardList;
