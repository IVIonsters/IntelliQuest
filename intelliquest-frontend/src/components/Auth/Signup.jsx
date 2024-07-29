import styles from './Signup.module.css';
import brainImage from '../../assets/images/brain_image.png';

function Signup() {
    function handleClick() {
        console.log("Button Clicked");
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
                    <input className={styles.entryBox} name="firstName" type="text" placeholder='Enter first name:' />
                    <h2>Last Name:</h2>
                    <input className={styles.entryBox} name="lastName" type="text" placeholder='Enter last name:' />
                    <h2>Email:</h2>
                    <input className={styles.entryBox} name="email" type="text" placeholder='Enter email:' />
                    <h2>User Name:</h2>
                    <input className={styles.entryBox} name="userName" type="text" placeholder='Enter user name:' />
                    <h2>Password:</h2>
                    <input className={styles.entryBox} name="password" type="text" placeholder='Enter password:' />
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
