/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Activities from './components/Activities/Activities.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import SearchResultsPage from './components/SearchResultsPage/SearchResultsPage.jsx';
import Error from './components/Error/Error.jsx';
import Donations from './components/Donations/Donations.jsx';
import styles from './main.module.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import QuizGenerator from './components/QuizGenerator/QuizGenerator.jsx';
import CodeOptimizer from './components/CodeOptimizer/CodeOptimizer.jsx';
import SubmitResource from './components/SubmitResource/SubmitResource.jsx';
import Login from './components/Auth/Login.jsx';
import Signup from './components/Auth/Signup.jsx';
import { AuthProvider } from './components/Auth/AuthContext.jsx';
import UserDashboard from './components/UserDashboard/UserDashboard.jsx';
import FlashcardsPage from './components/FlashCards/FlashcardsPage.jsx';
import LearnBot from './components/LearnBot/LearnBot.jsx'

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
        path: 'learnbot',
        element: <LearnBot />,
      },
      {
        index: true,
        element: <HomePage />
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
        path: 'flashcards',
        element: <FlashcardsPage />
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
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'userdashboard',
        element: <UserDashboard />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <div className={styles['main-content']}>
      <RouterProvider router={router} />
    </div>
  </AuthProvider>
);