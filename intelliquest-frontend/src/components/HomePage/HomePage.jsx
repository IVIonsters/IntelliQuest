import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import PlaceHolderImage from '../../assets/images/placeholder.jpg';
import styles from './HomePage.module.css';

const events = [
    { title: 'JavaScript Basics', description: 'Learn the fundamentals of JavaScript by hands-on learning techniques', image: PlaceHolderImage },
    { title: 'Event 2', description: 'Description 2', image: PlaceHolderImage },
    { title: 'Event 3', description: 'Description 3', image: PlaceHolderImage },
    { title: 'Event 4', description: 'Description 4', image: PlaceHolderImage },
    { title: 'Event 5', description: 'Description 5', image: PlaceHolderImage },
    { title: 'Event 6', description: 'Description 6', image: PlaceHolderImage },
];

const HomePage = () => {
    return (
      <div className={styles.homepageContainer}>
        <div className={styles.homepageInnerContainer}>
          <div className={styles.gridContainer}>
            {events.map((event, index) => (
              <CourseCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default HomePage;
