//import FlipcardList from "../FlipcardList/FlipcardList";


import React, { useState } from 'react';

// import FlipcardList from '../FlipcardList/FlipcardList';

console.log (FlipcardPage)

export default function FlipcardPage() {
  const [topic, setTopic] = useState("");

  const options = ["Git", "CLI Basics", "CSS", "HTML", "JavaScript", "API's", "Node.js", "express.js", "ORM", "SQL", "NoSQL", "REACT", "MERN", "Python"];
  const onOptionChangeHandler = (e) => {
    setTopic(e.target.value);
 
  };
  return (
    <div>
      <h2>Please Select a Topic</h2>
      <select onChange={onOptionChangeHandler}>
        <option>Please Choose One Option</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <h3>
        You Choose Topic: {topic}
        {/* Pass the selected topic to FlipcardList */}
          {topic && <FlipcardList topic={topic} />}
      </h3>
    </div>
  );
}
