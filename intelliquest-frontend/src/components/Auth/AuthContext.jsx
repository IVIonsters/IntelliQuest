/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/Auth/AuthContext.jsx

import React, { createContext, useState } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children, navigate }) => {
  const [user, setUser] = useState(null);

  const login = (token) => {
    if (typeof token === 'string') {
      try {
        const decodedUser = jwtDecode(token); // Decode the token to get user data
        console.log('Decoded User:', decodedUser); // Check if the token is correctly decoded
        setUser(decodedUser);
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    } else {
      console.error('Invalid token: Not a string');
    }
    navigate('/home');
  };

  const logout = () => {
    setUser(null);
    // Remove user data from localStorage
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

