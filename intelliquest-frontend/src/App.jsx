// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import TipsModal from './components/TipsModal/TipsModal';

// Array of tips to be displayed in the modal
const tips = [
  "Tip 1: Remember to save your work often.",
  "Tip 2: Use keyboard shortcuts to speed up your workflow.",
  "Tip 3: Keep your code well-documented.",
  "Tip 4: Practice Practice Practice",
  // Add more tips as needed
];

const App = () => {
  // State variables
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState('');
  const [tipIndex, setTipIndex] = useState(0);
  const [hasShownFirstTip, setHasShownFirstTip] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle search queries
  const handleSearch = async (searchTerm) => {
    try {
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      // Development
      // const response = await fetch(`http://localhost:5000/api/resources/search?query=${encodedSearchTerm}`);
      // Production
      const response = await fetch(`https://intelliquestdb.onrender.com/api/resources/search?query=${encodedSearchTerm}`);
      const data = await response.json();

      // Log the response for debugging
      console.log('Search response:', data);

      if (Array.isArray(data)) {
        setSearchResults(data);
        navigate(`/search?query=${encodedSearchTerm}`, { state: { searchResults: data } });
      } else {
        console.error('Search results is not an array:', data);
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResults([]);
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Effect to show tips periodically
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

  // Effect to set search results based on location state
  useEffect(() => {
    if (location.pathname === '/search' && location.state?.searchResults) {
      setSearchResults(location.state.searchResults);
    }
  }, [location]);

  return (
    <div className={styles.app}>
      {/* Navbar component with search functionality */}
      <Navbar onSearch={handleSearch} />
      <main className={styles.main}>
        {/* Outlet for nested routes */}
        <Outlet context={{ searchResults }} />
      </main>
      {/* Footer component */}
      <Footer />
      {/* Tips modal component */}
      <TipsModal isOpen={isModalOpen} onClose={closeModal} tip={currentTip} />
    </div>
  );
};

export default App;
