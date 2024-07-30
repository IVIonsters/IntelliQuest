import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from '../CourseCard/CourseCard';
import styles from './HomePage.module.css';

// HomePage component to display a list of resources
const HomePage = () => {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState(null);

  // Fetch resources from the backend
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/resources');
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

