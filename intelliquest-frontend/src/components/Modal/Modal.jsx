/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Modal.module.css';

// Modal component to display different types of content in a modal window
const Modal = ({ isOpen, onClose, content }) => {
  // If the modal is not open, return null (do not render anything)
  if (!isOpen) return null;

  // Function to render content based on its type
  const renderContent = () => {
    switch (content.type) {
      case 'video':
        let embedUrl = content.url;
        if (embedUrl.includes('youtube.com') || embedUrl.includes('youtu.be')) {
          // Extract the video ID from the YouTube URL
          const videoId = embedUrl.split('v=')[1] || embedUrl.split('/')[3];
          embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
        }
        return (
          <iframe
            src={embedUrl}
            className={styles.media}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={content.title}
          ></iframe>
        );
      case 'website':
      case 'channel':
        return (
          <div className={styles.externalLinkContainer}>
            <img src={content.thumbnail} alt={content.title} className={styles.modalImage} />
            <p>This content cannot be displayed here. Please click the link below to view it:</p>
            <a href={content.url} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
              Open in a new tab
            </a>
          </div>
        );
      default:
        return <p>Invalid content type</p>;
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.content}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
