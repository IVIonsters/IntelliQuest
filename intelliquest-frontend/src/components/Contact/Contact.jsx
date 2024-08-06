import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_053kfvd', 'template_pc407mi', form.current, {
                publicKey: 'XBP9KEXYFQOkB5RAl',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <div className={styles.gridContainer}>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" required />
                        <label>Email</label>
                        <input type="email" name="user_email" required />
                        <label>Message</label>
                        <textarea name="message" required />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;