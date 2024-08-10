/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// FlashCards/FlipcardList.jsx
import React from 'react';
import Flipcard from './Flipcard';
import styles from './FlipcardList.module.css';

const FlipcardList = ({ flipcards }) => {
    return (
        <div className={styles.flipcardList}>
            {flipcards.map((card, index) => (
                <Flipcard key={index} card={card} />
            ))}
        </div>
    );
};

export default FlipcardList;
