import FlipCardList from "../FlipcardList/FlipcardList";
import { useState } from "react";
export default function FlipcardPage() {
  const [topic, setTopic] = useState();

  const options = ["Git", "CSS", "HTML", "JavaScript", "etc."];
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
      </h3>
    </div>
  );
}
