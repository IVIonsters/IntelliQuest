import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import UserList from './components/UserList';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to IntelliQuest</h1>
        <UserList />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;


