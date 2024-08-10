/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Activities.module.css';
import quizImage from '../../assets/images/quiz.jpeg';
import fcImage from '../../assets/images/fc.jpeg';
import optImage from '../../assets/images/opt.jpeg';
import ftkImage from '../../assets/images/FTK.jpg';
import osImage from '../../assets/images/OldSchool.jpg';
import lbImage from '../../assets/images/LearnBot.jpg';

function Activities() {
    return (
        <div className={styles.activitiesContainer}>
            <div className={styles.activitiesInnerContainer}>
                <div className={styles.gridContainer}>
                    <div className={styles.card}>
                        <img src={quizImage} alt='Quiz' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2><Link to="/quiz">Quiz</Link></h2>
                            <p>Test your knowledge with a randomly generated quiz</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={fcImage} alt='Flash Cards' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2><Link to="/flashcards">Flash Cards</Link></h2> {/* Link to Flashcards Page */}
                            <p>Test your knowledge with flash cards</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={optImage} alt='Code Optimizer' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2><Link to="/optimize">Code Optimizer</Link></h2>
                            <p>Learn how to optimize your code</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={lbImage} alt='Learn Bot' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2><Link to="/">Chat With Our Learn Bot!</Link></h2>
                            <p>Feature coming soon.....</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={ftkImage} alt='Coming soon...' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2><Link to="/">Future Features!</Link></h2>
                            <p>Feature coming soon.....</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={osImage} alt='Coming soon...' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2><Link to="/">Future Features!</Link></h2>
                            <p>Feature coming soon.....</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities;
