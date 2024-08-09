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

