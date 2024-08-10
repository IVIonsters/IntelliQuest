/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import ReactMarkdown from 'react-markdown'; 
import rehypeRaw from 'rehype-raw'; 
import axios from 'axios';
import styles from './UserDashboard.module.css';
import { FaGithub, FaLinkedin, FaInstagram, FaPencilAlt } from 'react-icons/fa';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const [resources, setResources] = useState([]);
  const [isEditing, setIsEditing] = useState({});
  const [profileData, setProfileData] = useState(() => {
    const savedProfileData = localStorage.getItem('profileData');
    return savedProfileData
      ? JSON.parse(savedProfileData)
      : {
          bio: 'Developer with a love for creating.',
          pronouns: 'Male',
          company: 'IVIonsters Designs LLC',
          location: 'Somewhere, Earth',
          socialLinks: {
            github: 'https://github.com/IVIonsters',
            linkedin: 'https://linkedin.com/in/zacharypolof',
            instagram: 'https://instagram.com/zpolof',
          },
        };
  });

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

  const handleEditClick = (field) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const handleChange = (e, field) => {
    setProfileData({ ...profileData, [field]: e.target.value });
  };

  const handleSaveClick = (field) => {
    setIsEditing({ ...isEditing, [field]: false });
    localStorage.setItem('profileData', JSON.stringify(profileData));
  };

  const handleCancelClick = (field) => {
    setIsEditing({ ...isEditing, [field]: false });
  };

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
            {isEditing.bio ? (
              <>
                <textarea
                  value={profileData.bio}
                  onChange={(e) => handleChange(e, 'bio')}
                  className={styles.textarea}
                />
                <div className={styles.editButtons}>
                  <button onClick={() => handleSaveClick('bio')}>Save</button>
                  <button onClick={() => handleCancelClick('bio')}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <p>{profileData.bio}</p>
                <FaPencilAlt className={styles.editIcon} onClick={() => handleEditClick('bio')} />
              </>
            )}
          </div>

          <div className={styles.infoBox}>
            <h3>Pronouns</h3>
            {isEditing.pronouns ? (
              <>
                <input
                  value={profileData.pronouns}
                  onChange={(e) => handleChange(e, 'pronouns')}
                  className={styles.input}
                />
                <div className={styles.editButtons}>
                  <button onClick={() => handleSaveClick('pronouns')}>Save</button>
                  <button onClick={() => handleCancelClick('pronouns')}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <p>{profileData.pronouns}</p>
                <FaPencilAlt className={styles.editIcon} onClick={() => handleEditClick('pronouns')} />
              </>
            )}
          </div>

          <div className={styles.infoBox}>
            <h3>Company</h3>
            {isEditing.company ? (
              <>
                <input
                  value={profileData.company}
                  onChange={(e) => handleChange(e, 'company')}
                  className={styles.input}
                />
                <div className={styles.editButtons}>
                  <button onClick={() => handleSaveClick('company')}>Save</button>
                  <button onClick={() => handleCancelClick('company')}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <p>{profileData.company}</p>
                <FaPencilAlt className={styles.editIcon} onClick={() => handleEditClick('company')} />
              </>
            )}
          </div>

          <div className={styles.infoBox}>
            <h3>Location</h3>
            {isEditing.location ? (
              <>
                <input
                  value={profileData.location}
                  onChange={(e) => handleChange(e, 'location')}
                  className={styles.input}
                />
                <div className={styles.editButtons}>
                  <button onClick={() => handleSaveClick('location')}>Save</button>
                  <button onClick={() => handleCancelClick('location')}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <p>{profileData.location}</p>
                <FaPencilAlt className={styles.editIcon} onClick={() => handleEditClick('location')} />
              </>
            )}
          </div>

          <ul className={styles.socialLinks}>
            <li>
              <FaGithub className={styles.icon} />
              {isEditing.github ? (
                <>
                  <input
                    value={profileData.socialLinks.github}
                    onChange={(e) => setProfileData({ ...profileData, socialLinks: { ...profileData.socialLinks, github: e.target.value } })}
                    className={styles.input}
                  />
                  <div className={styles.editButtons}>
                    <button onClick={() => handleSaveClick('github')}>Save</button>
                    <button onClick={() => handleCancelClick('github')}>Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <FaPencilAlt className={styles.editIcon} onClick={() => handleEditClick('github')} />
                </>
              )}
            </li>
            <li>
              <FaLinkedin className={styles.icon} />
              {isEditing.linkedin ? (
                <>
                  <input
                    value={profileData.socialLinks.linkedin}
                    onChange={(e) => setProfileData({ ...profileData, socialLinks: { ...profileData.socialLinks, linkedin: e.target.value } })}
                    className={styles.input}
                  />
                  <div className={styles.editButtons}>
                    <button onClick={() => handleSaveClick('linkedin')}>Save</button>
                    <button onClick={() => handleCancelClick('linkedin')}>Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <FaPencilAlt className={styles.editIcon} onClick={() => handleEditClick('linkedin')} />
                </>
              )}
            </li>
            <li>
              <FaInstagram className={styles.icon} />
              {isEditing.instagram ? (
                <>
                  <input
                    value={profileData.socialLinks.instagram}
                    onChange={(e) => setProfileData({ ...profileData, socialLinks: { ...profileData.socialLinks, instagram: e.target.value } })}
                    className={styles.input}
                  />
                  <div className={styles.editButtons}>
                    <button onClick={() => handleSaveClick('instagram')}>Save</button>
                    <button onClick={() => handleCancelClick('instagram')}>Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <a href={profileData.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                  <FaPencilAlt className={styles.editIcon} onClick={() => handleEditClick('instagram')} />
                </>
              )}
            </li>
          </ul>
        </div>

        <div className={styles.readmeContainer}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{`
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
          `}</ReactMarkdown>
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