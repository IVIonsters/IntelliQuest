import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import Modal from 'react-modal';
import styles from './Footer.module.css';

// Footer component
const Footer = () => {
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [paneContent, setPaneContent] = useState('');

  // bind modal to App element
  Modal.setAppElement('#root');

  const openPane = (content) => {
    setPaneContent(content);
    setIsPaneOpen(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Links section */}
        <div className={styles.links}>
          <a href="#" className={styles.link}>Social Media</a>
          <a href="#" className={styles.link} onClick={() => openPane('contact')}>Contact Info</a>
          <a href="#" className={styles.link} onClick={() => openPane('terms')}>Terms Of Service</a>
          <a href="#" className={styles.link} onClick={() => openPane('policies')}>Policies</a>
        </div>
        {/* Copyright section */}
        <p className={styles.copyright}>© 2024 IntelliQuest</p>
      </div>

      {/* Sliding pane */}
      <SlidingPane
        isOpen={isPaneOpen}
        title={
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
          {paneContent === 'contact' && (
            <div>
              <h2>Contact Info</h2>
              <p>
                Send us an email <a href="mailto:intelliquesthq@gmail.com">here</a>.
              </p>
            </div>
          )}
        </div>
      </SlidingPane>
    </footer>
  );
};

export default Footer;
