import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Signup from './components/Auth/Signup.jsx';
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
      }
    ]
  },{
    path: '/signup',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Signup />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className={styles['main-content']}>
    <RouterProvider router={router} />
  </div>
);
