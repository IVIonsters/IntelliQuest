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
      setModalContent({
        type: resource.type,
        url: resource.url,
        title: resource.title,
        thumbnail: resource.thumbnail,
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
      <div className={styles.cardContainer}>
        <div className={styles.card} style={{ '--clr': '#03A9F4' }} onClick={handleClick}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <div className={styles.imgBox}>
                <img src={resource.thumbnail} alt={resource.title} />
              </div>
            </div>
            <div className={styles.cardBack}>
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className={styles.cardTitle}>{resource.title}</div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={modalContent} />
    </>
  );
};

export default CourseCard;
