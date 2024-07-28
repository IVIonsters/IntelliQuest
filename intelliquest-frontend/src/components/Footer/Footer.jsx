import React from 'react';
import styles from './Footer.module.css';

// Footer component
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Links section */}
        <div className={styles.links}>
          <a href="#" className={styles.link}>Social Media</a>
          <a href="#" className={styles.link}>Contact Info</a>
          <a href="#" className={styles.link}>Terms Of Service</a>
          <a href="#" className={styles.link}>Policies</a>
        </div>
        {/* Copyright section */}
        <p className={styles.copyright}>© 2024 IntelliQuest</p>
      </div>
    </footer>
  );
};

export default Footer;
