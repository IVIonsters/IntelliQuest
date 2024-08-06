import React, { useState } from 'react'

import UserProfile from './UserProfile';
import Signup from '../Auth/Signup';
import styles from './Header.module.css'


// //import { Sign } from 'crypto';
function Header() {
//     //checks if user is authenticated, automatically is set to false
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     //Mock login/logout functions
//     const login = () => setIsAuthenticated(true);
//     const logout = () => setIsAuthenticated(false);

   return (
      //displays only if logged in user views their home page
    <h1 className={styles.header}>This will be a header that says something akin to "Hello Username!"</h1>
//     <>
//     <Header isAuthenticated = {isAuthenticated}/>
//     <main>
//         <button onClick = {isAuthenticated ? logout : login}>
//             {isAuthenticated ? 'Logout' : 'Login'}
//         </button>
//     </main>
//     </>
   )
 }

// function user({ isAuthenticated}) {
//     return (
//         <header> 
//             <h1> Welcome, username!</h1>
//             {isAuthenticated ? (
//                 <UserProfile/>
//             ) : (
//                 <Signup/>
//             )
//         }
//         </header>
//     )
// }

export default Header