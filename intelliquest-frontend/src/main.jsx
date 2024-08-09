/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Signup from './components/Auth/Signup.jsx';
import Activities from './components/Activities/Activities.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import SearchResultsPage from './components/SearchResultsPage/SearchResultsPage.jsx';
import Login from './components/Auth/Login.jsx';
import Error from './components/Error/Error.jsx';
import Donations from './components/Donations/Donations.jsx';
import styles from './main.module.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import QuizGenerator from './components/QuizGenerator/QuizGenerator.jsx';
import CodeOptimizer from './components/CodeOptimizer/CodeOptimizer.jsx';
import SubmitResource from './components/SubmitResource/SubmitResource.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: 'home',
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
        index: true,
        element: <Signup />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'quiz',
        element: <QuizGenerator />
      },
      {
        path: 'optimize',
        element: <CodeOptimizer />
      },
      {
        path: 'submit-resource',
        element: <SubmitResource />
      },
      {
        path: 'donations',
        element: <Donations />
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
