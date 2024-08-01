import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
    // Example: Fetch search results from an API or filter data locally
  };

  return (
    <div className={styles.app}>
      <Navbar onSearch={handleSearch} />
      <main className={styles.main}>
        <Outlet context={{ searchResults }} />
      </main>
      <Footer />
    </div>
  );
};

export default App;



// import UserList from './components/UserList';
/* <h1>Welcome to IntelliQuest</h1>
        <UserList /> */