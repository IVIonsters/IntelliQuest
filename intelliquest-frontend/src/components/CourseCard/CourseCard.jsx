/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './CourseCard.module.css';

const CourseCard = ({ resource }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleClick = () => {
    if (resource.type && resource.url) {
      console.log('Resource data:', resource);
      setModalContent({
        type: resource.type,
        url: resource.url,
        title: resource.title,
        thumbnail: resource.thumbnail, // Add thumbnail to modal content
      });
      setIsModalOpen(true);
    } else {
      console.error('Invalid resource data:', resource);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  return (
    <>
      <div className={styles.courseCard} onClick={handleClick}>
        <img src={resource.thumbnail} alt={resource.title} className={styles.courseCardImage} />
        <div className={styles.courseCardOverlay}>
          <h2>{resource.title}</h2>
          <p>{resource.description}</p>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={modalContent} />
    </>
  );
};

export default CourseCard;
