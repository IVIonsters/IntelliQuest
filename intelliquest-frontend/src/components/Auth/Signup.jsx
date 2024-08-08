import styles from './Signup.module.css';
import brainImage from '../../assets/images/brain_image.png';
import { useState } from 'react';
import { setDataLocalStorage } from '../../utils/browserStorage';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [user, setUser] = useState({ firstName: "", lastName: "", email: "", userName: "", password: "" });
    const [error, setError] = useState("");
    const AUTH_TOKEN_NAME = import.meta.env.VITE_AUTH_TOKEN_NAME;
    let navigate = useNavigate();

    async function handleClick(e) {
        try {
            e.preventDefault();

            // Update URL to point to Render backend
            const baseUrl = import.meta.env.VITE_API_URL || 'https://intelliquestdb.onrender.com/';
            const url = `${baseUrl}/api/signup`; // Ensure baseUrl ends with a slash and add slash before 'api'

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstName: user.firstName, lastName: user.lastName, email: user.email, userName: user.userName, password: user.password })
            });

            if (!response.ok) {
                const apiError = await response.json();
                setError(apiError.message || apiError);
            } else {
                const token = await response.json();
                if (!token) {
                    setError("Sign Up Unsuccessful");
                } else {
                    setError("");
                    setDataLocalStorage(AUTH_TOKEN_NAME, token.token);
                    setUser({ firstName: "", lastName: "", email: "", userName: "", password: "" });
                    navigate("/home");
                }
            }
        } catch (error) {
            setError(error.message);
        }
    }

    function handleFirstNameOnChange(e) {
        e.preventDefault();
        setUser({ ...user, firstName: e.target.value });
    }

    function handleLastNameOnChange(e) {
        e.preventDefault();
        setUser({ ...user, lastName: e.target.value });
    }

    function handleEmailOnChange(e) {
        e.preventDefault();
        setUser({ ...user, email: e.target.value });
    }

    function handleUserNameOnChange(e) {
        e.preventDefault();
        setUser({ ...user, userName: e.target.value });
    }

    function handlePasswordOnChange(e) {
        e.preventDefault();
        setUser({ ...user, password: e.target.value });
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
                    <p className={styles.error}>{error}</p>
                    <h2>First Name:</h2>
                    <input onChange={handleFirstNameOnChange} className={styles.entryBox} name="firstName" type="text" placeholder='Enter first name:' value={user.firstName} />
                    <h2>Last Name:</h2>
                    <input onChange={handleLastNameOnChange} className={styles.entryBox} name="lastName" type="text" placeholder='Enter last name:' value={user.lastName} />
                    <h2>Email:</h2>
                    <input onChange={handleEmailOnChange} className={styles.entryBox} name="email" type="text" placeholder='Enter email:' value={user.email} />
                    <h2>User Name:</h2>
                    <input onChange={handleUserNameOnChange} className={styles.entryBox} name="userName" type="text" placeholder='Enter user name:' value={user.userName} />
                    <h2>Password:</h2>
                    <input onChange={handlePasswordOnChange} className={styles.entryBox} name="password" type="password" placeholder='Enter password:' value={user.password} />
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
