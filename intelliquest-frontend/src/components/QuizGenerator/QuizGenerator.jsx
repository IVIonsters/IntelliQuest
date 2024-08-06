// src/components/QuizGenerator/QuizGenerator.jsx
import React, { useState } from 'react';
import axios from 'axios';

const QuizGenerator = () => {
  const [topic, setTopic] = useState('');
  const [quiz, setQuiz] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/generate_quiz', { topic });
      setQuiz(response.data.quiz);
      setError(null);
    } catch (err) {
      setError('Error generating quiz');
      setQuiz([]);
    }
  };

  return (
    <div>
      <h1>Generate a Quiz</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="topic">Enter a topic:</label>
        <input
          type="text"
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
        <button type="submit">Generate Quiz</button>
      </form>
      <div>
        {quiz.length > 0 && <h2>Quiz</h2>}
        {quiz.map((question, index) => (
          <p key={index}>{index + 1}. {question}</p>
        ))}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default QuizGenerator;
