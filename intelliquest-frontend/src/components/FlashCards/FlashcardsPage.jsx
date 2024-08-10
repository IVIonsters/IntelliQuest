/* eslint-disable no-unused-vars */
// FlashCards/FlashcardsPage.jsx
import React, { useState } from 'react';
import FlipcardList from './FlipcardList';
import styles from './FlashcardsPage.module.css';
import flipcardsData from '../../utils/flipcards.json'; // Adjust the path as needed

const FlashcardsPage = () => {
    
    const randomizeAndLimitCards = (cards) => {
        const shuffledCards = [...cards].sort(() => 0.5 - Math.random());
        return shuffledCards.slice(0, 10); // Limit to 10 cards
    };

    const [selectedTopic, setSelectedTopic] = useState(flipcardsData[0].topic); // Default to the first topic
    const [filteredQuestions, setFilteredQuestions] = useState(randomizeAndLimitCards(flipcardsData[0].questions));

    const handleTopicChange = (event) => {
        const selectedTopic = event.target.value;
        setSelectedTopic(selectedTopic);
        const topicData = flipcardsData.find(topic => topic.topic === selectedTopic);
        setFilteredQuestions(topicData ? randomizeAndLimitCards(topicData.questions) : []);
    };

    return (
        <div className={styles.flashcardsContainer}>
            <h1>Flash Cards</h1>
            <label htmlFor="topic-select">Choose a topic:</label>
            <select id="topic-select" value={selectedTopic} onChange={handleTopicChange}>
                {flipcardsData.map((topic) => (
                    <option key={topic.topic} value={topic.topic}>
                        {topic.topic}
                    </option>
                ))}
            </select>
            <div className={styles.flipcardListContainer}>
                <FlipcardList flipcards={filteredQuestions} />
            </div>
        </div>
    );
};

export default FlashcardsPage;
