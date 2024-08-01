/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?query=${searchTerm}`);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>IntelliQuest</div>
      <ul className={styles.navLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
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

