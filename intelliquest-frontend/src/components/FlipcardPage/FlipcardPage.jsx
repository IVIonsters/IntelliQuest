import React, { useState } from "react";
import FlipcardList from "../FlipcardList/FlipcardList";

// import flipcardsData from "../../utils/flipcards.json";

export default function FlipcardPage() {
  const [topic, setTopic] = useState("");

  const options = [
    "Git",
    "CLI Basics",
    "CSS",
    "HTML",
    "JavaScript",
    "API's",
    "Node.js",
    "express.js",
    "ORM",
    "SQL",
    "NoSQL",
    "REACT",
    "MERN",
    "Python",
  ];

  const onOptionChangeHandler = (e) => {
    setTopic(e.target.value);
  };
  return (
    <div>
      <h2>Please Select a Topic</h2>
      <select onChange={onOptionChangeHandler} value={topic}>
        <option>Please Choose One Option</option>
        <option value="">Please Choose One Option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
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
