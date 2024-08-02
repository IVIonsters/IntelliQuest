import React, { useEffect, useState } from 'react';
import styles from './Activities.module.css';
import PlaceHolderImage from '../../assets/images/placeholder.jpg';

function Activities() {
    return (
        <div className={styles.activitiesContainer}>
            <div className={styles.activitiesInnerContainer}>
                <div className={styles.gridContainer}>
                    <div className={styles.card}>
                        <img src={PlaceHolderImage} alt='Quiz' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                         <h2>  Quiz </h2> 
                         <p>Test your knowledge with a randomly generated quiz </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities;