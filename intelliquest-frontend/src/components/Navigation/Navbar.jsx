/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Home from '../HomePage/HomePage'
import Descope from '../Auth/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
     <nav className={styles.navbar}>
       <div className={styles.logo}>IntelliQuest</div>
       <ul className={styles.navLinks}>
        <li><a href="/">Home</a></li>
        <li><Link to = "/CourseList">Courses</Link></li>
        <li><Link to ="/About">About</Link></li>
        <li><Link to ="/Contact">Contact</Link></li>
      </ul>
      <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
