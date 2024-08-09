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
        console.log('Token used for fetch:', user.token); // Log the token being used
        const response = await fetch('https://intelliquestdb.onrender.com/api/auth/profile', {
          headers: { 'Authorization': `Bearer ${user.token}` },
        });
        const data = await response.json();
        if (!response.ok) {
          setError(data.message);
        } else {
          setProfile(data);
        }
      } catch (error) {
        setError('Error fetching profile');
      }
    };
    fetchProfile();
  }, [user.token]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log('Token used for update:', user.token); // Log the token being used
      const response = await fetch('https://intelliquestdb.onrender.com/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify(profile),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message);
      } else {
        setProfile(data);
      }
    } catch (error) {
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
