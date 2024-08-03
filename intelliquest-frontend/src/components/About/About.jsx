import React, { useEffect, useState } from 'react';
import styles from './About.module.css';
import zpImage from '../../assets/images/zp.jpeg';
import rrImage from '../../assets/images/rr.jpeg';
import asImage from '../../assets/images/as.jpeg';
import crImage from '../../assets/images/cr.jpeg';
import erImage from "../../assets/images/er.jpeg";
import cjImage from "../../assets/images/cj.jpeg";

function About() {

    const [selectedUrl, setSelectedUrl] = useState(null);

    const handleCardClick = (url) => {
        setSelectedUrl(url);
    };

    return (
        <div className={styles.aboutContainer}>
            {!selectedUrl ? (
            <div className={styles.aboutInnerContainer}>
                <div className={styles.gridContainer}>
                <div className={styles.card} onClick={() => handleCardClick('https://ivionstersdesigns.netlify.app')}>
                        <img src={zpImage} alt='Zach' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2>Zachary Polof</h2>
                            <p>Full Stack developer located in Fort Walton Beach, Florida</p>
                        </div>
                    </div>
                    <div className={styles.card} onClick={() => handleCardClick('https://splash1972--colinsportfolio.netlify.app')}>
                        <img src={rrImage} alt='Quiz' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2>Renee Rodriguez</h2>
                            <p>Full Stack developer located in </p>
                        </div>
                    </div>
                    <div className={styles.card} onClick={() => handleCardClick('https://splash1972--colinsportfolio.netlify.app')}>
                        <img src={asImage} alt='Quiz' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2>Alyson Sanchez</h2>
                            <p>Full Stack developer located in Lakeland, Florida</p>
                        </div>
                    </div>
                    <div className={styles.card} onClick={() => handleCardClick('https://splash1972--colinsportfolio.netlify.app')}>
                        <img src={crImage} alt='Quiz' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2>Colin Robinson</h2>
                            <p>Full Stack developer located in Orlando, Florida</p>
                        </div>
                    </div>
                    <div className={styles.card} onClick={() => handleCardClick('https://splash1972--colinsportfolio.netlify.app')}>
                        <img src={erImage} alt='Quiz' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2>Ethan Robertson</h2>
                            <p>Full Stack developer located in Orlando, Florida</p>
                        </div>
                    </div>
                    <div className={styles.card} onClick={() => handleCardClick('https://splash1972--colinsportfolio.netlify.app')}>
                        <img src={cjImage} alt='Quiz' className={styles.cardImage} />
                        <div className={styles.cardOverlay}>
                            <h2>Chelsea Jarvis</h2>
                            <p>Full Stack developer located in Denver, Colorado</p>
                        </div>
                    </div>
                </div>
            </div>
            ) : (
                <div className={styles.iframeContainer}>
                    <button onClick={() => setSelectedUrl(null)} className={styles.backButton}>Back</button>
                    <iframe src={selectedUrl} title="External Content" className={styles.iframe}></iframe>
                </div>
            )}
        </div>
    );
}

export default About;