import React from 'react';

import Header from './Header';
import ProfilePicture from './ProfilePicture';
import Bio from './Bio';
import Favorites from './Favorites';
import styles from "./UserProfile.module.css"

//USER PROFILE CHECKLIST
//1. PROFILE PICTURE
//2.BIOGRAPHY / ABOUT ME
//3. FAVORITE RESOURCES

const userProfile = () =>{
    return (
        <div>
            <div >
                <Header/>
            </div>
            <div className={styles.mainInfoContainer}>
                <ProfilePicture/>
                <Bio/>
            </div>
            <div className={styles.favoritesContainer}>
                <Favorites/>
            </div>
        </div>
    )
};

export default userProfile