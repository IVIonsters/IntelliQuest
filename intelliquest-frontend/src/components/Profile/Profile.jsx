// src/components/Profile/Profile.jsx
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import styles from './Profile.module.css';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const [profile, setProfile] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (user && user.token) {  // Ensure user and token are available
          const response = await fetch('https://intelliquestdb.onrender.com/api/auth/profile', {
            headers: { 'Authorization': `Bearer ${user.token}` },
          });
  
          if (!response.ok) {
            const data = await response.json();
            setError(data.message);
          } else {
            const data = await response.json();
            setProfile(data);
          }
        } else {
          setError('User token is missing');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError('Error fetching profile');
      }
    };
  
    fetchProfile();
  }, [user]);
  

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (user && user.token) {  // Check if user and token are available
        const response = await fetch('https://intelliquestdb.onrender.com/api/auth/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
          },
          body: JSON.stringify(profile),
        });

        if (!response.ok) {
          const data = await response.json();
          setError(data.message);
        } else {
          const data = await response.json();
          setProfile(data);
        }
      } else {
        setError('User token is missing');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Error updating profile');
    }
  };

  return (
    <div className={styles.profileContainer}>
      <h2>Profile</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleUpdate} className={styles.profileForm}>
        <label>First Name:</label>
        <input
          type="text"
          value={profile.firstName || ''}
          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        />
        <label>Last Name:</label>
        <input
          type="text"
          value={profile.lastName || ''}
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        />
        <label>Email:</label>
        <input
          type="email"
          value={profile.email || ''}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <label>Password (leave blank to keep current):</label>
        <input
          type="password"
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        />
        <button type="submit">Update Profile</button>
      </form>
      <button onClick={logout} className={styles.logoutButton}>Logout</button>
    </div>
  );
};

export default Profile;
