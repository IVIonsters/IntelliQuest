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

  return (
    <div className={styles.searchResults}>
      <h1>Search Results for "{query}"</h1>
      {searchResults.length > 0 ? (
        searchResults.map((resource) => (
          <CourseCard key={resource._id} resource={resource} />
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResultsPage;


