import React, { useEffect, useState } from 'react';
import styles from './Activities.module.css';
import PlaceHolderImage from '../../assets/images/placeholder.jpg';
import quizImage from '../../assets/images/quiz.jpeg';
import fcImage from '../../assets/images/fc.jpeg'
import optImage from '../../assets/images/opt.jpeg'

function Activities() {
    return (
        <div className={styles.activitiesContainer}>
            <div className={styles.activitiesInnerContainer}>
                <div className={styles.gridContainer}>
                    <div className={styles.card}>
                        <img src={quizImage} alt='Quiz' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2>  Quiz </h2>
                            <p>Test your knowledge with a randomly generated quiz </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={fcImage} alt='Quiz' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2>  Flash Cards </h2>
                            <p>Test your knowledge with flash cards </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={optImage} alt='Quiz' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2>  Code Optimizer </h2>
                            <p>Learn how to optimize your code </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities;