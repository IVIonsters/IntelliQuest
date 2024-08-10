// src/components/UserDashboard/UserDashboard.jsx
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './UserDashboard.module.css';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  // Hardcoded data for the new sections
  const bio = "Passionate developer with a love for coding and learning new technologies.";
  const pronouns = "He/Him";
  const company = "IVIonsters Designs LLC";
  const location = "San Francisco, CA";
  const socialLinks = {
    instagram: "https://www.instagram.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
    github: "https://github.com/yourusername"
  };

  return (
    <div className={styles.dashboardContainer}>
      <h2>Welcome, {user.userName}</h2>
      {user.avatarUrl ? (
        <img src={user.avatarUrl} alt={`${user.userName}'s Avatar`} className={styles.avatar} />
      ) : (
        <p>User Avatar not available</p>
      )}

      {/* New Sections */}
      <div className={styles.infoBox}>
        <h3>Bio</h3>
        <p>{bio}</p>
      </div>

      <div className={styles.infoBox}>
        <h3>Pronouns</h3>
        <p>{pronouns}</p>
      </div>

      <div className={styles.infoBox}>
        <h3>Company</h3>
        <p>{company}</p>
      </div>

      <div className={styles.infoBox}>
        <h3>Location</h3>
        <p>{location}</p>
      </div>

      <div className={styles.infoBox}>
        <h3>Social Links</h3>
        <ul className={styles.socialLinks}>
          <li><FaInstagram className={styles.icon} /><a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><FaLinkedin className={styles.icon} /><a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><FaGithub className={styles.icon} /><a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
