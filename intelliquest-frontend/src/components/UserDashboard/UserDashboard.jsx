/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import ReactMarkdown from 'react-markdown'; 
import rehypeRaw from 'rehype-raw'; 
import styles from './UserDashboard.module.css';
import axios from 'axios';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Fetch random resources from the database
    const fetchResources = async () => {
      try {
        const response = await axios.get('https://intelliquestdb.onrender.com/api/resources/random');
        setResources(response.data.slice(0, 3)); // Limit to only 3 resources
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };
  
    fetchResources();
  }, []);
  

  if (!user) {
    return <div>Loading...</div>;
  }

  // Example markdown content (your README.md content)
  const markdownContent = `
  # Hello,👋🏻 I appreciate you stopping by! Check out my projects!
  
  [![Static Badge](https://img.shields.io/badge/Zachary-IVIonsters_Designs-teal)](https://ivionsters.github.io/Journeys-End/)

  ###  Exploring the beauty in the world through technology.🌎

  I have a passion for programming and am constantly looking for ways to expand my knowledge! Relentless in my pursuit to become more knowledgeable about my craft! I enjoy crafting dynamically eventful websites and projects. Real-world application and focus are what I strive for in my project concepts. Let's connect and build something to change the world! ☄

  **Let's Connect:📱**
  <a href="https://github.com/IVIonsters"><img alt="Github Url" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"></a> 
  <a href="mailto:zacharypolof@gmail.com"><img alt="Email Me!" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a> 
  <a href="https://www.linkedin.com/in/zacharypolof/"><img alt="LinkedIn Profile" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"></a> 
  <a href="https://www.instagram.com/zpolof/"><img alt="Instagram Link" src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white"></a> 
  <a href="https://www.facebook.com/zachary.polof"><img alt="Facebook Profile" src="https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white"></a>

  **📖 I’m currently learning ...** Advanced JavaScript, Node, React.

  **🌐 Languages and Tools**

  <img align="left" alt="Github" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" /> 
  <img align="left" alt="HTML" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" /> 
  <img align="left" alt="CSS" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" /> 
  <img align="left" alt="JavaScript" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" /> 
  <img align="left" alt="Bootstrap" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" /> 
  <img align="left" alt="jQuery" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" /> 
  <img align="left" alt="GIT" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" /> 
  <img align="left" alt="NPM" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" /> 
  <img align="left" alt="Express" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" /> 
  <img align="left" alt="Node" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" /> 
  <img align="left" alt="SQL" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" /> 
  <img align="left" alt="handlebars" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-original-wordmark.svg" /> 
  <img align="left" alt="MongoDB" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" /> 
  <img align="left" alt="Mongoose" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" /> 
  <img align="left" alt="Docker" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" /> 
  <img align="left" alt="React" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" /> 

  `;

  return (
    <div>
      <div className={styles.dashboardContainer}>
        <div className={styles.userInfo}>
          <h2>Welcome, {user.userName}</h2>
          {user.avatarUrl ? (
            <img src={user.avatarUrl} alt="User Avatar" className={styles.avatar} />
          ) : (
            <p>User Avatar not available</p>
          )}

          <div className={styles.infoBox}>
            <h3>Bio</h3>
            <p>Developer with a love for creating.</p>
          </div>

          <div className={styles.infoBox}>
            <h3>Pronouns</h3>
            <p>Male</p>
          </div>

          <div className={styles.infoBox}>
            <h3>Company</h3>
            <p>IVIonsters Designs LLC</p>
          </div>

          <div className={styles.infoBox}>
            <h3>Location</h3>
            <p>Somewhere, Earth</p>
          </div>

          <ul className={styles.socialLinks}>
            <li><FaGithub className={styles.icon} /><a href="https://github.com/IVIonsters">GitHub</a></li>
            <li><FaLinkedin className={styles.icon} /><a href="https://linkedin.com/in/zacharypolof">LinkedIn</a></li>
            <li><FaInstagram className={styles.icon} /><a href="https://instagram.com/zpolof">Instagram</a></li>
          </ul>
        </div>

        <div className={styles.readmeContainer}>
          <h3></h3>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
        </div>
      </div>

      <div className={styles.resourcesContainer}>
        <h3>Favorite Resources</h3>
        <div className={styles.resourceCards}>
          {resources.map((resource, index) => (
            <div key={index} className={styles.resourceCard}>
              <h4>{resource.title}</h4>
              <p>{resource.description}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">Visit</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

