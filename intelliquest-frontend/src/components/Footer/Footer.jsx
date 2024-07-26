import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="#" className={styles.link}>Social Media</a>
          <a href="#" className={styles.link}>Contact Info</a>
          <a href="#" className={styles.link}>Terms Of Service</a>
          <a href="#" className={styles.link}>Policies</a>
        </div>
        <p className={styles.copyright}>© 2024 IntelliQuest</p>
      </div>
    </footer>
  );
};

export default Footer;
