import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import TipsModal from './components/TipsModal/TipsModal';

const tips = [
  "Tip 1: Remember to save your work often.",
  "Tip 2: Use keyboard shortcuts to speed up your workflow.",
  "Tip 3: Keep your code well-documented.",
  "Tip 4: Practice Practice Practice",
  // Add more tips as needed
];

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState('');
  const [tipIndex, setTipIndex] = useState(0);
  const [hasShownFirstTip, setHasShownFirstTip] = useState(false);

  const handleSearch = (searchTerm) => {
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
    // Example: Fetch search results from an API or filter data locally
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const showTip = () => {
      setCurrentTip(tips[tipIndex]);
      setIsModalOpen(true);
      setTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
    };

    if (!hasShownFirstTip) {
      const firstTipTimeout = setTimeout(() => {
        showTip();
        setHasShownFirstTip(true);
      }, 4 * 60 * 1000); // 4 minutes

      return () => clearTimeout(firstTipTimeout);
    } else {
      const intervalId = setInterval(showTip, 4 * 60 * 1000); // 4 minutes
      
      return () => clearInterval(intervalId);
    }
  }, [hasShownFirstTip, tipIndex]);

  return (
    <div className={styles.app}>
      <Navbar onSearch={handleSearch} />
      <main className={styles.main}>
        <Outlet context={{ searchResults }} />
      </main>
      <Footer />
      <TipsModal isOpen={isModalOpen} onClose={closeModal} tip={currentTip} />
    </div>
  );
};

export default App;