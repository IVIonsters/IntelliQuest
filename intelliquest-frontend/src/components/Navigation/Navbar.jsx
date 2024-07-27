import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
// import Logo from '../assets/images/Fakelogo.jpg';

function NavBar() {
  const currentPage = useLocation().pathname;
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <button
          className={styles.navbarBrandButton}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          IntelliQuest
        </button>
        {open && (
          <div id="example-collapse-text" className={styles.navbarCollapseText}>
            Improve Your Coding Game!
          </div>
        )}
      </div>
      <div className={styles.navbarToggle} onClick={() => setOpen(!open)}>
        ☰
      </div>
      <div className={`${styles.navbarCollapse} ${open ? styles.open : ''}`}>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <a href="mailto:IQ@intelliquest.com" className={styles.navLink}>Email Us</a>
          </li>
          <li className={`${styles.navItem} ${styles.navbarDropdown}`}>
            <span className={styles.navLink}>More Here</span>
            <div className={styles.navbarDropdownContent}>
              <Link to="/FlashCards" className={styles.dropdownItem}>Flash Cards</Link>
              <Link to="/Quizzes" className={styles.dropdownItem}>Quizzes</Link>
              <hr />
              <Link to="/AboutMe" className={styles.dropdownItem}>About Us</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
