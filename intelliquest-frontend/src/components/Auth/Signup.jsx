import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setDataLocalStorage } from '../../utils/browserStorage';
import styles from './Signup.module.css';
import brainImage from '../../assets/images/brain_image.png';

function Signup() {
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "", userName: "", password: "" });
  const [error, setError] = useState("");
  const AUTH_TOKEN_NAME = import.meta.env.VITE_AUTH_TOKEN_NAME;
  let navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    const baseUrl = import.meta.env.VITE_API_URL;
    const url = `${baseUrl}/api/signup`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const apiError = await response.json();
        setError(apiError.message);
      } else {
        const { token } = await response.json();
        setError("");
        setDataLocalStorage(AUTH_TOKEN_NAME, token);
        setUser({ firstName: "", lastName: "", email: "", userName: "", password: "" });
        navigate("/home");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        <div className={styles.sidebar}><img src={brainImage} alt="" />
          <h1>Welcome to IntelliQuest!</h1>
          <h2>Whether you're a beginner or looking to sharpen your skills, we're here to guide you every step of the way. Let's build something amazing together!</h2>
        </div>
        <form className={styles.form}>
          <h1>Sign Up</h1>
          <p className='error'>{error}</p>
          <h2>First Name:</h2>
          <input onChange={(e) => setUser({ ...user, firstName: e.target.value })} className={styles.entryBox} name="firstName" type="text" placeholder='Enter first name:' value={user.firstName} />
          <h2>Last Name:</h2>
          <input onChange={(e) => setUser({ ...user, lastName: e.target.value })} className={styles.entryBox} name="lastName" type="text" placeholder='Enter last name:' value={user.lastName} />
          <h2>Email:</h2>
          <input onChange={(e) => setUser({ ...user, email: e.target.value })} className={styles.entryBox} name="email" type="text" placeholder='Enter email:' value={user.email} />
          <h2>User Name:</h2>
          <input onChange={(e) => setUser({ ...user, userName: e.target.value })} className={styles.entryBox} name="userName" type="text" placeholder='Enter user name:' value={user.userName} />
          <h2>Password:</h2>
          <input onChange={(e) => setUser({ ...user, password: e.target.value })} className={styles.entryBox} name="password" type="password" placeholder='Enter password:' value={user.password} />
          <button onClick={handleClick} className={styles.button} type="submit">Sign Up</button>
          <div className={styles.loginLink}>
            <h2>Already have an account?</h2>
            <h2><a href="/login">Log In</a></h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

