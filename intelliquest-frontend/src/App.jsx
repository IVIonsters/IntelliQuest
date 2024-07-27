import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;