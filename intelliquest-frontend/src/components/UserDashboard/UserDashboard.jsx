/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import styles from './UserDashboard.module.css';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <h2>Welcome, {user.userName}</h2>
      <img src={user.gravatarUrl} alt="User Avatar" className={styles.avatar} />
      {/* Additional dashboard content goes here */}
    </div>
  );
};

export default UserDashboard;

