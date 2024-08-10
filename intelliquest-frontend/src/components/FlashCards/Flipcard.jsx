/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// FlashCards/Flipcard.jsx
import React from 'react';
import styles from './Flipcard.module.css';

const Flipcard = ({ card }) => {
    if (!card || !card.question || !card.answer) {
        return null; // Safely return nothing if the data is not valid
    }

    return (
        <div className={styles.flipcard}>
            <div className={styles.flipcardInner}>
                <div className={styles.flipcardFront}>
                    <h3>{card.question}</h3>
                </div>
                <div className={styles.flipcardBack}>
                    <p>{card.answer}</p>
                </div>
            </div>
        </div>
    );
};

export default Flipcard;
