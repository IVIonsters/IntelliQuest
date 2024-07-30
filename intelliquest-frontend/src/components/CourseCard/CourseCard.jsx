/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './CourseCard.module.css';
import PlaceHolderImage from '../../assets/images/placeholder.jpg';

const CourseCard = ({ resource }) => {
  const imageUrl = resource.thumbnail ? resource.thumbnail : PlaceHolderImage;

  return (
    <div className={styles.courseCard}>
      <img src={imageUrl} alt={resource.title} className={styles.courseCardImage} />
      <div className={styles.courseCardOverlay}>
        <h2>{resource.title}</h2>
        <p>{resource.description}</p>
      </div>
    </div>
  );
};

export default CourseCard;


