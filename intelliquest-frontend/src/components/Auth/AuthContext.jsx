/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/Auth/AuthContext.jsx

import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode'; // Adjusted import for ES modules

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (token) => {
    try {
      // Store token in localStorage or sessionStorage if needed
      localStorage.setItem('authToken', token);

      // Decode the token to get user information
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
      navigate('/home');
    } catch (error) {
      console.error('Failed to decode token:', error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken'); // Remove the token from storage on logout
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

