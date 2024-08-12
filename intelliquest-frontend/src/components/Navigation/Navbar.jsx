/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import styles from './Navbar.module.css';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false); // State to manage the overlay
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    navigate(`/search?query=${searchTerm}`);
    setIsOverlayOpen(false); // Close the overlay after search
  };

  const handleLogout = () => {
    logout();
    setIsSidebarOpen(false); // Close sidebar on logout
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen); // Toggle the overlay on and off
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>IntelliQuest</div>
      
      {/* Hamburger Menu Icon */}
      <FaBars className={styles.hamburger} onClick={toggleSidebar} />
      
      {/* Navigation Links and Sidebar */}
      <ul className={`${styles.navLinks} ${isSidebarOpen ? styles.showSidebar : ''}`}>
        <FaTimes className={styles.navbarCloseBtn} onClick={toggleSidebar} />
        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
        <li><Link to="/activities" onClick={toggleSidebar}>Activities</Link></li>
        <li><Link to="/submit-resource" onClick={toggleSidebar}>Resource</Link></li>
        <li><Link to="/userdashboard" onClick={toggleSidebar}>Dashboard</Link></li>
        <li><Link to="/donations" onClick={toggleSidebar}>Donations</Link></li>
        
        {/* Search Icon */}
        <li className={styles.searchIconContainer}>
          <FaSearch className={styles.searchIcon} onClick={toggleOverlay} />
        </li>

        {/* Authentication Links */}
        {user ? (
          <div className={styles.navbarAuthLinks}>
            <span className={styles.welcomeText}>Welcome, {user.userName || 'User'}</span>
            <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
          </div>
        ) : (
          <div className={styles.navbarAuthLinks}>
            <Link to="/login" onClick={toggleSidebar}>Login</Link>
            <Link to="/signup" onClick={toggleSidebar}>Sign Up</Link>
          </div>
        )}
      </ul>

      {/* Fullscreen Search Overlay */}
      {isOverlayOpen && (
        <div className={styles.searchOverlay}>
          <form onSubmit={handleSearchSubmit} className={styles.searchOverlayForm}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.searchInput}
              placeholder="Search..."
            />
            <button type="submit" className={styles.searchButton}>Go</button>
          </form>
          <FaTimes className={styles.overlayCloseBtn} onClick={toggleOverlay} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
