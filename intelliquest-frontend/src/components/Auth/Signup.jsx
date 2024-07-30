import styles from './Signup.module.css';
import brainImage from '../../assets/images/brain_image.png';
import { useState } from 'react';

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleClick(e) {
        e.preventDefault();
        console.log({firstName, lastName, email, userName, password});
    }

    function handleFirstNameOnChange(e) {
        e.preventDefault();
        setFirstName(e.target.value);
    }

    function handleLastNameOnChange(e) {
        e.preventDefault();
        setLastName(e.target.value);
    }

    function handleEmailOnChange(e) {
        e.preventDefault();
        setEmail(e.target.value);
    }

    function handleUserNameOnChange(e) {
        e.preventDefault();
        setUserName(e.target.value);
    }

    function handlePasswordOnChange(e) {
        e.preventDefault();
        setPassword(e.target.value);
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
                    <h2>First Name:</h2>
                    <input onChange={handleFirstNameOnChange} className={styles.entryBox} name="firstName" type="text" placeholder='Enter first name:' />
                    <h2>Last Name:</h2>
                    <input onChange={handleLastNameOnChange} className={styles.entryBox} name="lastName" type="text" placeholder='Enter last name:' />
                    <h2>Email:</h2>
                    <input onChange={handleEmailOnChange} className={styles.entryBox} name="email" type="text" placeholder='Enter email:' />
                    <h2>User Name:</h2>
                    <input onChange={handleUserNameOnChange} className={styles.entryBox} name="userName" type="text" placeholder='Enter user name:' />
                    <h2>Password:</h2>
                    <input onChange={handlePasswordOnChange} className={styles.entryBox} name="password" type="text" placeholder='Enter password:' />
                    <button onClick={handleClick} className={styles.button} type="submit">Sign Up</button>
                    <div className={styles.loginLink}>
                        <h2>Already have an account?</h2>
                        <h2><a href="">Log In</a>
                        </h2>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Signup;
