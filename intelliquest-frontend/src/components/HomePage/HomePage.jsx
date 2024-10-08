/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from '../CourseCard/CourseCard';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        // Development
        // const response = await axios.get('http://localhost:5000/api/resources/random');
        // Production
        const response = await axios.get('https://intelliquestdb.onrender.com/api/resources/random');

        console.log('Fetched resources:', response.data);

        if (Array.isArray(response.data)) {
          setResources(response.data);
        } else {
          setError('Data is not in expected format');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchResources();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(resources) || resources.length === 0) {
    return <div>No resources found.</div>;
  }

  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepageInnerContainer}>
        <div className={styles.gridContainer}>
          {resources.map((resource, index) => (
            <CourseCard key={index} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
