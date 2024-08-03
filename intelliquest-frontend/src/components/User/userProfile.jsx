import React from 'react';

import Header from './Header';
import ProfilePicture from './ProfilePicture';
import Bio from './Bio';
import Favorites from './Favorites';

//USER PROFILE CHECKLIST
//1. PROFILE PICTURE
//2.BIOGRAPHY / ABOUT ME
//3. FAVORITE RESOURCES

const userProfile = () =>{
    return (
        <div>
            <Header/>
            <ProfilePicture/>
            <Bio/>
            <Favorites/>
        </div>
    )
};

export default userProfile