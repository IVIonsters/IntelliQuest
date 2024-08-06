import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
    const form = useRef();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_053kfvd', 'template_pc407mi', form.current, {
                publicKey: 'XBP9KEXYFQOkB5RAl',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    setIsModalVisible(true); // Show modal on success
                    setTimeout(() => {
                        setIsModalVisible(false); // Hide modal after 5 seconds
                    }, 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <div className={styles.contactContainer}>
                <h1>
                    <span className={styles.title}>Send us a message and we will get back to you soon!</span>
                </h1>
                <div className={styles.card}>
                    <div className={styles.gridContainer}>
                        <form className={styles.form} ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input className={styles.textarea} type="text" name="user_name" required />
                            <label>Email</label>
                            <input className={styles.textarea} type="email" name="user_email" required />
                            <label>Message</label>
                            <textarea className={styles.textarea} name="message" required />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
                {isModalVisible && (
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <p>Thank you for your message!</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;