import styles from './EmailPasswordLogin.module.css';
import { useState } from 'react';
import { setDataLocalStorage } from '../../utils/browserStorage';
import { useNavigate } from 'react-router-dom';

function EmailPasswordLogin() {
    const [user, setUser] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const AUTH_TOKEN_NAME = import.meta.env.VITE_AUTH_TOKEN_NAME;
    let navigate = useNavigate();

    async function handleClick(e) {
        try {
            e.preventDefault();

            // Update URL to point to Render backend
            const baseUrl = import.meta.env.VITE_API_URL || 'https://intelliquestdb.onrender.com/';
            const url = `${baseUrl}/api/login`; // Ensure baseUrl ends with a slash and add slash before 'api'

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: user.email, password: user.password })
            });

            if (!response.ok) {
                const apiError = await response.json();
                setError(apiError.message);
            } else {
                const token = await response.json();
                if (!token) {
                    setError("Login Unsuccessful");
                } else {
                    setError("");
                    setDataLocalStorage(AUTH_TOKEN_NAME, token);
                    setUser({ email: "", password: "" });
                    navigate("/home");
                }
            }
        } catch (error) {
            setError(error.message);
        }
    }

    function handleEmailOnChange(e) {
        e.preventDefault();
        setUser({ ...user, email: e.target.value });
    }

    function handlePasswordOnChange(e) {
        e.preventDefault();
        setUser({ ...user, password: e.target.value });
    }

    return (
        <div className={styles.signup}>
            <div className={styles.container}></div>
            <form className={styles.form}>
                <h1>Login</h1>
                <p className={styles.error}>{error}</p>
                <h2>Email:</h2>
                <input onChange={handleEmailOnChange} className={styles.entryBox} name="email" type="text" placeholder='Enter email:' value={user.email} />
                <h2>Password:</h2>
                <input onChange={handlePasswordOnChange} className={styles.entryBox} name="password" type="password" placeholder='Enter password:' value={user.password} />
                <button onClick={handleClick} className={styles.button} type="submit">Login</button>
                <div className={styles.loginLink}></div>
            </form>
        </div>
    );
}

export default EmailPasswordLogin;
