// src/components/QuizGenerator/QuizGenerator.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styles from './QuizGenerator.module.css';

const QuizGenerator = () => {
    const [topic, setTopic] = useState('');
    const [quiz, setQuiz] = useState([]);
    const [error, setError] = useState('');
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    // Function to handle form submission and fetch quiz
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Development URL
            const response = await axios.post('http://localhost:5000/generate_quiz', { topic });
            // Production URL
            // const response = await axios.post('https://intelliquestdb.onrender.com/generate_quiz', { topic });
            setQuiz(response.data.quiz);
            setError('');
            setShowResults(false);
            setSelectedAnswers({});
        } catch (error) {
            console.error('Error generating quiz:', error.response ? error.response.data : error.message);
            setError('Error generating quiz');
        }
    };

    // Function to handle answer selection
    const handleAnswerSelect = (questionIndex, option) => {
        setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
    };

    // Function to display results
    const handleCheckAnswers = () => {
        setShowResults(true);
    };

    // Function to reset the quiz form
    const handleReset = () => {
        setTopic('');
        setQuiz([]);
        setError('');
        setSelectedAnswers({});
        setShowResults(false);
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
            <div className={styles.quizContainer}>
                <h2>Quiz</h2>
                {quiz.map((item, index) => (
                    <div key={index} className={styles.quizQuestion}>
                        <p>{item.question}</p>
                        <div className={styles.optionsContainer}>
                            {item.options.map((option, idx) => (
                                <label key={idx} className={styles.option}>
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={option}
                                        onChange={() => handleAnswerSelect(index, option)}
                                        checked={selectedAnswers[index] === option}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {quiz.length > 0 && !showResults && (
                <button onClick={handleCheckAnswers} className={styles.button}>
                    Check Answers
                </button>
            )}
            {showResults && (
                <div className={styles.results}>
                    <h2>Results</h2>
                    {quiz.map((item, index) => (
                        <p key={index} className={styles.result}>
                            <strong>{item.question}</strong> - Your answer: <span>{selectedAnswers[index]}</span> - Correct answer: <span>{item.answer}</span> - {selectedAnswers[index] === item.answer ? 'Correct' : 'Incorrect'}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default QuizGenerator;

