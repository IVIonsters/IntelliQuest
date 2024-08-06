import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Activities.module.css';
import quizImage from '../../assets/images/quiz.jpeg';
import fcImage from '../../assets/images/fc.jpeg';
import optImage from '../../assets/images/opt.jpeg';

function Activities() {
    return (
        <div className={styles.activitiesContainer}>
            <div className={styles.activitiesInnerContainer}>
                <div className={styles.gridContainer}>
                    <div className={styles.card}>
                        <Link to="/quiz-generator">
                            <img src={quizImage} alt='Quiz' className={styles.cardImage} />
                            <div className={styles.cardOverlay}>
                                <h2>Quiz</h2>
                                <p>Test your knowledge with a randomly generated quiz</p>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <img src={fcImage} alt='Flash Cards' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2>Flash Cards</h2>
                            <p>Test your knowledge with flash cards</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={optImage} alt='Code Optimizer' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2>Code Optimizer</h2>
                            <p>Learn how to optimize your code</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities;
