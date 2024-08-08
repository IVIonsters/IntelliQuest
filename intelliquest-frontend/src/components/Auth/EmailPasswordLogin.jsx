// EmailPasswordLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setDataLocalStorage } from '../../utils/browserStorage';
import styles from './EmailPasswordLogin.module.css';

function EmailPasswordLogin() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const AUTH_TOKEN_NAME = import.meta.env.VITE_AUTH_TOKEN_NAME;
  let navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    const baseUrl = import.meta.env.VITE_API_URL;
    const url = `${baseUrl}/api/login`;

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
        setUser({ email: "", password: "" });
        navigate("/home");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className={styles.signup}>
      <form className={styles.form}>
        <h1>Login</h1>
        <p className={styles.error}>{error}</p>
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className={styles.entryBox}
          name="email"
          type="text"
          placeholder="Enter email:"
          value={user.email}
        />
        <input
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className={styles.entryBox}
          name="password"
          type="password"
          placeholder="Enter password:"
          value={user.password}
        />
        <button onClick={handleClick} className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
}

export default EmailPasswordLogin;
