import React, { useState } from "react";

import styles from './ProfilePage.module.css';

import genImg from '../../images/information-button.png';
import likedImg from '../../images/heart.png';
import hisImg from '../../images/file.png';
import edit from '../../images/edit.png';

import ProfileComponent from '../../Components/ProfileComponent/ProfileComponent';
import LikedComponent from '../../Components/LikedComponent/LikedComponent';
import HistoryComponent from '../../Components/HistoryComponent/HistoryComponent';

const ProfilePage = () => {
  const [choosen,setChoosen]=useState('gen');
  const [toedit,setEdit]=useState(false);
  const userId=window.localStorage.getItem('userId');

  const renderSection=()=>{
    if(choosen==='gen')return <ProfileComponent toedit={toedit}/>
    if(choosen==='liked' && userId!==null)return <LikedComponent/>
    if(choosen==='his' && userId!==null)return <HistoryComponent/>
  }

  return (
    <div className={styles.profilePage}>
      <div className={styles.headerSection}>
        <h1>Profile Page</h1>
      </div>
      <div className={styles.profileSection}>
        {choosen==='gen'?
                <div className={styles.editBtn}>
                <img src={edit} alt="edit-btn" onClick={()=>{setEdit(!toedit)}}/>
                <span>Edit</span>  
              </div>
        :""
        }
        <div className={styles.profileMenuSection}>
          <div className={choosen==='gen'?styles.choosen:""}
              onClick={()=>{setChoosen('gen')}}>
            <img src={genImg} alt="gen" />
            <h4>General</h4>
          </div>
          <div className={choosen==='liked'?styles.choosen:""}
              onClick={()=>{setChoosen('liked')}}>
            <img src={likedImg} alt="liked"></img>
            <h4>Liked Products</h4>
          </div>
          <div className={choosen==='his'?styles.choosen:""}
              onClick={()=>{setChoosen('his')}}>
            <img src={hisImg} alt="history"></img>
            <h4>Order History</h4>
          </div>
        </div>
        <div className={styles.generalSection}>
          {renderSection()}
        </div>

      </div>
    </div>
  )
};

export default ProfilePage;
