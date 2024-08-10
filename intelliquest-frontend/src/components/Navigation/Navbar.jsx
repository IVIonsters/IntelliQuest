/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    navigate(`/search?query=${searchTerm}`);
    setIsSidebarOpen(false); // Close sidebar on search
  };

  const handleLogout = () => {
    logout();
    setIsSidebarOpen(false); // Close sidebar on logout
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>IntelliQuest</div>
      <FaBars className={styles.hamburger} onClick={toggleSidebar} />
      <ul className={`${styles.navLinks} ${isSidebarOpen ? styles.showSidebar : ''}`}>
        <FaTimes className={styles.closeBtn} onClick={toggleSidebar} />
        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
        <li><Link to="/activities" onClick={toggleSidebar}>Activities</Link></li>
        <li><Link to="/submit-resource" onClick={toggleSidebar}>Resource</Link></li>
        <li><Link to="/userdashboard" onClick={toggleSidebar}>Dashboard</Link></li>
        <li><Link to="/donations" onClick={toggleSidebar}>Donations</Link></li>
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
        {user ? (
          <div className={styles.authLinks}>
            <span className={styles.welcomeText}>Welcome, {user.userName || 'User'}</span>
            <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
          </div>
        ) : (
          <div className={styles.authLinks}>
            <Link to="/login" onClick={toggleSidebar}>Login</Link>
            <Link to="/signup" onClick={toggleSidebar}>Sign Up</Link>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
