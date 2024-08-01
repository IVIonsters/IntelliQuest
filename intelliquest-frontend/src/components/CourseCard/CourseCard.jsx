/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './CourseCard.module.css';

const CourseCard = ({ resource }) => {
  return (
    <div className={styles.courseCard}>
      {resource.thumbnail ? (
        <img src={resource.thumbnail} alt={resource.title} className={styles.courseCardImage} />
      ) : (
        <div className={styles.noImageAvailable}>No Image Available</div>
      )}
      <div className={styles.courseCardOverlay}>
        <h2>{resource.title}</h2>
        <p>{resource.description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
