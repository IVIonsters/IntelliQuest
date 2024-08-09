/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>IntelliQuest</div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/submit-resource">Resource</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/donations">Donations</Link></li>
      </ul>
      <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
