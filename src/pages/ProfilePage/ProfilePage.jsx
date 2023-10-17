import React, { useState } from "react";
import './ProfilePage.css';

import genImg from '../../images/information-button.png';
import likedImg from '../../images/heart.png';
import hisImg from '../../images/file.png';
import edit from '../../images/edit.png';

import ProfileComponent from '../../Components/ProfileComponent/ProfileComponent';
import LikedComponent from '../../Components/LikedComponent/LikedComponent';
import HistoryComponent from '../../Components/HistoryComponent/HistoryComponent';

const ProfilePage = () => {
  const [choosen,setChoosen]=useState('gen');

  const renderSection=()=>{
    if(choosen==='gen')return <ProfileComponent/>
    if(choosen==='liked')return <LikedComponent/>
    if(choosen==='his')return <HistoryComponent/>
  }

  return (
    <div className="profile-page">
      <div className="header-section">
        <h1>Profile Page</h1>
      </div>
      <div className="profile-section">
        <div className="edit-btn">
          <img src={edit} alt="edit-btn"/>
          <span>Edit</span>  
        </div>
        <div className="profile-menu-section">
          <div className={choosen==='gen'?'choosen':""}
              onClick={()=>{setChoosen('gen')}}>
            <img src={genImg} alt="gen">
            </img>
            <h4>General</h4>
          </div>
          <div className={choosen==='liked'?'choosen':""}
              onClick={()=>{setChoosen('liked')}}>
            <img src={likedImg} alt="liked"></img>
            <h4>Liked Products</h4>
          </div>
          <div className={choosen==='his'?'choosen':""}
              onClick={()=>{setChoosen('his')}}>
            <img src={hisImg} alt="history"></img>
            <h4>Order History</h4>
          </div>
        </div>
        {renderSection()}
      </div>
    </div>
  )
};

export default ProfilePage;
