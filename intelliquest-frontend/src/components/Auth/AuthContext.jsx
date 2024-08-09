/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/Auth/AuthContext.jsx

import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children, navigate }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    if (typeof userData === 'string') {
      try {
        const parsedData = JSON.parse(userData);
        setUser(parsedData);
      } catch (error) {
        console.error('Failed to parse userData:', error);
      }
    } else {
      setUser(userData);
    }
    navigate('/home');
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
