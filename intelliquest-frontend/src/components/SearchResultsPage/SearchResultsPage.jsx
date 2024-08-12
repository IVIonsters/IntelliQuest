/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import styles from './SearchResultsPage.module.css';
import { useLocation, useOutletContext } from 'react-router-dom';

const SearchResultsPage = () => {
  const { searchResults } = useOutletContext();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');

  if (!Array.isArray(searchResults)) {
    console.error('Search results is not an array:', searchResults);
    return <div>Error: Search results is not an array</div>;
  }

  // Shuffle the results to get a random order
  const shuffledResults = searchResults.sort(() => 0.5 - Math.random());

  // Limit the results to a maximum of 8 or however many you prefer
  const limitedResults = shuffledResults.slice(0, 9);

  return (
    <div className={styles.searchResultsContainer}>
      <h1>Search Results for "{query}"</h1>
      <div className={styles.searchResults}>
        {limitedResults.length > 0 ? (
          limitedResults.map((resource) => (
            <CourseCard key={resource._id} resource={resource} />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;