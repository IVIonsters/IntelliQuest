import React from 'react';
import styles from './CourseCard.module.css';

const CourseCard = ({ event }) => {
  return (
    <div className={styles.courseCard}>
      <img src={event.image} alt={event.title} className={styles.courseCardImage} />
      <div className={styles.courseCardOverlay}>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
