/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Signup from './components/Auth/Signup.jsx';
import Activities from './components/Activities/Activities.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import SearchResultsPage from './components/SearchResultsPage/SearchResultsPage.jsx'; // Add this import
import Login from './components/Auth/Login.jsx';
import Error from './components/Error/Error.jsx'; // Ensure you have an Error component
import styles from './main.module.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'activities',
        element: <Activities />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'search',
        element: <SearchResultsPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className={styles['main-content']}>
    <RouterProvider router={router} />
  </div>
);
