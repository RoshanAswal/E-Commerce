import React from "react";
import './ProfilePage.css';

import genImg from '../../images/information-button.png';
import likedImg from '../../images/heart.png';
import hisImg from '../../images/file.png';
import profileImg from '../../images/shikamaru.jpg';
import edit from '../../images/edit.png';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="header-section">
        <h1>Profile Page</h1>
      </div>
      <div className="profile-section">
        <div className="edit-btn">
          <img src={edit} alt="edit-btn"/>
        </div>
        <div className="profile-menu-section">
          <div>
            <img src={genImg} alt="gen"></img>
            <h4>General</h4>
          </div>
          <div>
            <img src={likedImg} alt="liked"></img>
            <h4>Liked Products</h4>
          </div>
          <div>
            <img src={hisImg} alt="history"></img>
            <h4>Order History</h4>
          </div>
        </div>
        <div className="profile-detail-section">
          <div className="personal-info-section">
            <div className="profile-img">
              <img src={profileImg} alt="profile"></img>
            </div>
            <div className="general-info">
              <h4><span>Name</span>  Roshan Aswal</h4>
              <hr />
              <h4><span>Email</span>   aswalroshan2002@gmail.com</h4>
              <hr />
              <h4><span>Mobile</span>   +91-999-xxx-xxxx</h4>
              <hr />
            </div>
          </div>
          <hr />
          <div className="address-section">
            <div className="address-header">
              <h1>Shipping Address</h1>
            </div>
            <h2>Address #1</h2>
            <div className="first-address">
              <h2>Lorem ipsum dolor sit amet, consectetur</h2>
              <h2>Donec volutpat orci libero, ac tempor eros</h2>
              <h2>apien semper, auctor magna ut</h2>
              <h2>Lorem ipsum 12334, 2342</h2>
            </div>
            <h2>Address #2</h2>
            <div className="first-address">
              <h2>Lorem ipsum dolor sit amet, consectetur</h2>
              <h2>Donec volutpat orci libero, ac tempor eros</h2>
              <h2>apien semper, auctor magna ut</h2>
              <h2>Lorem ipsum 12334, 2342</h2>
            </div>
          </div>
          <hr/>
          <div className="Payment-section">
            <div>
              <h2>Payment Details</h2>
            </div>
            <div>
              <h3>UPI ID #1  <span>094820394093</span></h3>
              <h3>UPI ID #2  <span>094820394093</span></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProfilePage;
