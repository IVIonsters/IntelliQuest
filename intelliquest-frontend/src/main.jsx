import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Signup from './components/Auth/Signup.jsx';
import Activities from './components/Activities/Activities.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import styles from './main.module.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Auth/Login.jsx';

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
        path: '/Activities',
        element: <Activities />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
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
  },

  {
    path: '/login',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className={styles['main-content']}>
    <RouterProvider router={router} />
  </div>
);
