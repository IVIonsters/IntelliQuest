// src/components/UserDashboard/UserDashboard.jsx
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import styles from './UserDashboard.module.css';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <h2>Welcome, {user.userName}</h2>
      {user.gravatarUrl ? (
        <img src={user.gravatarUrl} alt={`${user.userName}'s Avatar`} className={styles.avatar} />
      ) : (
        <p>User Avatar not available</p>
      )}
    </div>
  );
};

export default UserDashboard;


