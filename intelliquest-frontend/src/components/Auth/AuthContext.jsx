/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/Auth/AuthContext.jsx

import React, { createContext, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import md5 from 'md5'; // Import md5 for generating Gravatar hash

const AuthContext = createContext();

const AuthProvider = ({ children, navigate }) => {
  // Initialize user state with token from localStorage (if available)
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedUser = jwtDecode(token); // Decode the token to get user data
        let gravatarUrl = '';
        // Check if email exists in decodedUser and generate Gravatar URL
        if (decodedUser.email) {
          gravatarUrl = `https://www.gravatar.com/avatar/${md5(decodedUser.email)}?d=identicon`;
          console.log('Gravatar URL:', gravatarUrl); // Debug: Log the Gravatar URL
        }
        return { ...decodedUser, token, gravatarUrl };
      } catch (error) {
        console.error('Failed to decode token:', error);
        return null;
      }
    }
    return null;
  });

  // Function to log in the user and store the token
  const login = (token) => {
    if (typeof token === 'string') {
      try {
        const decodedUser = jwtDecode(token); // Decode the token to get user data
        let gravatarUrl = '';
        // Check if email exists in decodedUser and generate Gravatar URL
        if (decodedUser.email) {
          gravatarUrl = `https://www.gravatar.com/avatar/${md5(decodedUser.email)}?d=identicon`;
          console.log('Gravatar URL:', gravatarUrl); // Debug: Log the Gravatar URL
        }
        setUser({ ...decodedUser, token, gravatarUrl });
        localStorage.setItem('token', token); // Store token in localStorage
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    } else {
      console.error('Invalid token: Not a string');
    }
    navigate('/home'); // Redirect user to the home page after login
  };

  // Function to log out the user and remove the token
  const logout = () => {
    setUser(null);
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect user to the login page after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
