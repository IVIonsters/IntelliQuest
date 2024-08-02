/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      history.push(`/search?q=${searchTerm}`);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>IntelliQuest</div>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
    </nav>
  );
};

export default Navbar;

