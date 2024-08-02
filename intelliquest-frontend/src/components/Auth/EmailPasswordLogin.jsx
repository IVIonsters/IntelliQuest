import styles from './EmailPasswordLogin.module.css';
import { useState } from 'react';

function EmailPasswordLogin() {
    const [user, setUser] = useState({ email: "", password: "" });

    async function handleClick(e) {
        e.preventDefault();

        const baseUrl = import.meta.env.VITE_API_URL;
        const url = `${baseUrl}api/login`;
        const response = await fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: user.email, password: user.password})
        });
        const loggedInUser = await response.json();
        console.log({ loggedInUser });
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
            <div className={styles.container}>
            </div>
            <form className={styles.form}>
                <h1>Login</h1>
                <h2>Email:</h2>
                <input onChange={handleEmailOnChange} className={styles.entryBox} name="email" type="text" placeholder='Enter email:' value={user.email} />
                <h2>Password:</h2>
                <input onChange={handlePasswordOnChange} className={styles.entryBox} name="password" type="text" placeholder='Enter password:' value={user.password} />
                <button onClick={handleClick} className={styles.button} type="submit">Login</button>
                <div className={styles.loginLink}>
                </div>
            </form>
        </div>
    )
};

export default EmailPasswordLogin;
