import React from 'react';
import Modal from 'react-modal';
import styles from './TipsModal.module.css';

Modal.setAppElement('#root'); // Ensure accessibility by setting the root element

const TipsModal = ({ isOpen, onClose, tip }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Tips Modal"
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <h2>Tip of the Moment</h2>
      <br />
      <p>{tip}</p>
      <br />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default TipsModal;
