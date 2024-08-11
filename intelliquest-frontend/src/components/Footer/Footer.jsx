/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import Modal from 'react-modal';
import styles from './Footer.module.css';
import emailjs from 'emailjs-com';
import About from '../About/About';

//Footer component
const Footer = () => {
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [paneContent, setPaneContent] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const form = useRef(null);

  // bind modal to App element
  Modal.setAppElement('#root');

  const openPane = (content) => {
    setPaneContent(content);
    setIsPaneOpen(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_053kfvd', 'template_pc407mi', form.current, {
            publicKey: 'XBP9KEXYFQOkB5RAl',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                form.current.reset(); // Reset the form after sending the email
                setIsModalVisible(true); // Show the success modal

                setTimeout(() => {
                    setIsModalVisible(false); // Hide the modal after 5 seconds
                }, 5000);
            },
            (error) => {
                console.log('FAILED...', error.text);
                console.error('Failed to send email:', error);
            }
        );
};


  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="#" className={styles.link} onClick={() => openPane('about')}>About</a>
          <a href="#" className={styles.link} onClick={() => openPane('contact')}>Contact Info</a>
          <a href="#" className={styles.link} onClick={() => openPane('terms')}>Terms Of Service</a>
          <a href="#" className={styles.link} onClick={() => openPane('policies')}>Policies</a>
        </div>
        <p className={styles.copyright}>© 2024 IntelliQuest</p>
      </div>

      <SlidingPane
        isOpen={isPaneOpen}
        title={
          paneContent === 'about' ? 'About IntelliQuest' :
          paneContent === 'terms' ? 'Terms of Service' :
          paneContent === 'policies' ? 'Policies' :
          paneContent === 'contact' ? 'Contact Info' :
          ''
        }
        from="bottom"
        width="100%"
        onRequestClose={() => setIsPaneOpen(false)}
      >
        <div>
          {paneContent === 'contact' && (
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
                  <p>
                Send us an email <a href="mailto:intelliquesthq@gmail.com">here</a>.
              </p>
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
          )}
          {paneContent === 'terms' && (
            <div>
              <h2>Terms of Service</h2>
              <p>Welcome to our coding learning platform, where we offer interactive flashcards, quizzes, and various learning tools to enhance your coding skills. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. We reserve the right to modify these terms at any time, and it is your responsibility to review them periodically. Your continued use of the site after any changes signifies your acceptance of the new terms.</p>
              <p>All content provided on our website, including but not limited to flashcards, quizzes, text, graphics, and software, is the intellectual property of our platform or our content suppliers and is protected by applicable copyright laws. Unauthorized use, reproduction, or distribution of this content is strictly prohibited. Additionally, you agree to use our website for lawful purposes only and to respect the rights and privacy of other users. Any form of abuse, harassment, or fraudulent activity will result in immediate termination of your account and may lead to legal action.</p>
              <p>By using our website, you acknowledge that we provide educational content and tools as-is without any guarantees or warranties. We do not take responsibility for any errors, omissions, or inaccuracies in the content provided, nor do we guarantee that our services will meet your specific requirements or expectations. Your use of our platform is at your own risk, and we are not liable for any direct or indirect damages that may arise from your use of our website. If you have any questions or concerns about these terms, please contact us for further clarification.</p>
            </div>
          )}
          {paneContent === 'policies' && (
            <div>
              <h2>Policies</h2>
              <p>We expect all users to adhere to our community guidelines. Any behavior that is disruptive, offensive, or violates the rights of others will not be tolerated. We reserve the right to suspend or terminate accounts for violations of our policies. Additionally, we may collect and use certain user data in accordance with our Privacy Policy.</p>
            </div>
          )}
          {paneContent === 'about' && (
            <About />
          )}
        </div>
      </SlidingPane>
    </footer>
  );
};

export default Footer;
