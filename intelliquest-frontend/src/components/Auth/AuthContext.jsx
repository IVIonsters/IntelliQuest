/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/Auth/AuthContext.jsx

import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children, navigate }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const login = (token, userData) => {
    setUser(userData);
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/home');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
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
