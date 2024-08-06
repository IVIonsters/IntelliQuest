// src/components/QuizGenerator/QuizGenerator.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styles from './QuizGenerator.module.css';

const QuizGenerator = () => {
    const [topic, setTopic] = useState('');
    const [quiz, setQuiz] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          // Development
          // const response = await axios.post('http://localhost:5000/generate_quiz', { topic });
          // Production
            const response = await axios.post('https://intelliquestdb.onrender.com/generate_quiz', { topic });
            setQuiz(response.data.quiz);
            setError('');
        } catch (error) {
            console.error('Error generating quiz:', error.response ? error.response.data : error.message);
            setError('Error generating quiz');
        }
    };

    const handleReset = () => {
        setTopic('');
        setQuiz([]);
        setError('');
    };

    return (
        <div className={styles.container}>
            <h1>Quiz Generator</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <textarea
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter a topic for the quiz..."
                    className={styles.textarea}
                />
                <button type="submit" className={styles.button}>Generate Quiz</button>
                <button type="button" onClick={handleReset} className={styles.button}>Reset</button>
            </form>
            {error && <p className={styles.error}>{error}</p>}
            <div>
                <h2>Quiz</h2>
                {quiz.map((question, index) => (
                    <p key={index} className={styles.quizQuestion}>{index + 1}. {question}</p>
                ))}
            </div>
        </div>
    );
};

export default QuizGenerator;

