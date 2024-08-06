// src/components/QuizGenerator/QuizGenerator.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styles from './QuizGenerator.module.css';

const QuizGenerator = () => {
  const [topic, setTopic] = useState('');
  const [quiz, setQuiz] = useState([]);

  const handleChange = (event) => {
    setTopic(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Update the URL to point to your server'
      //Development
      // const response = await axios.post('http://localhost:5000/generate_quiz', { topic });
      // Production
      const response = await axios.post('https://intelliquestdb.onrender.com/generate_quiz', { topic });

      setQuiz(response.data.quiz);
    } catch (error) {
      console.error('Error generating quiz:', error);
    }
  };

  return (
    <div className={styles.quizContainer}>
      <h1>Generate a Quiz</h1>
      <form onSubmit={handleSubmit} className={styles.quizForm}>
        <label htmlFor="topic">Enter a topic:</label>
        <input type="text" id="topic" value={topic} onChange={handleChange} required />
        <button type="submit">Generate Quiz</button>
      </form>
      <div id="quiz" className={styles.quiz}>
        <h2>Quiz</h2>
        {quiz.map((question, index) => (
          <p key={index}>{index + 1}. {question}</p>
        ))}
      </div>
    </div>
  );
};

export default QuizGenerator;
