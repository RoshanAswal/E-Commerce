import React, { useEffect, useState } from 'react'
import profileImg from '../../images/shikamaru.jpg';
import './ProfileComponent.css';
import axios from 'axios';

const ProfileComponent = (props) => {
  const [user,setUser]=useState();
  const userId=window.localStorage.getItem('userId');

  useEffect(()=>{
    const fetchUser=async ()=>{
      try{
        const response=await axios.get(`http://localhost:3001/profile/${userId}`);
        setUser(response.data.user);
      }catch(err){
        console.log(err);
      }
    }
    fetchUser();
  },[]);

  return (
    <div className="profile-detail-section">
    <div className="personal-info-section">
      <div className="profile-img">
        <img src={profileImg} alt="profile"></img>
      </div>
      {
        props.toedit
        ?
        <div className="general-info">
          <h4><span>Name</span><input autoFocus></input></h4>
          <hr />
          <h4><span>Email</span><input></input></h4>
          <hr />
          <h4><span>Mobile</span><input></input></h4>
          <hr />
        </div>
        :
        <div className="general-info">
          <h4><span>Name</span>{user?.username?user.username:'N/A'}</h4>
          <hr />
          <h4><span>Email</span>{user?.email?user.email:'N/A'}</h4>
          <hr />
          <h4><span>Mobile</span>{user?.phoneNo?user.phoneNo:'N/A'}</h4>
          <hr />
        </div>
      }

    </div>
    <hr />
    <div className="address-section">
      <div className="address-header">
        <h1>Shipping Address</h1>
      </div>
      {
        props.toedit
        ?
        <div>
          <h2>Address #1</h2>
          <div id='input-address'>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
          </div>
          <h2>Address #2</h2>
          <div id='input-address'>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
          </div>
        </div>
        :
        <div>
          <h2>Address #1</h2>
          <div className="first-address">
            {user?.address1
            ?user.address1
            :  <div>
                <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                <h2>Donec volutpat orci libero, ac tempor eros</h2>
                <h2>apien semper, auctor magna ut</h2>
                <h2>Lorem ipsum 12334, 2342</h2>
              </div>

            }

          </div>
          <h2>Address #2</h2>
          <div className="first-address">
          {user?.address2
          ?user.address2
          :    
            <div>
              <h2>Lorem ipsum dolor sit amet, consectetur</h2>
              <h2>Donec volutpat orci libero, ac tempor eros</h2>
              <h2>apien semper, auctor magna ut</h2>
              <h2>Lorem ipsum 12334, 2342</h2>
            </div>
            }
          </div>
        </div>
      }


    </div>
    <hr/>
    <div className="Payment-section">
      <div>
        <h2>Payment Details</h2>
      </div>
      {
        props.toedit
        ?
        <div>
          <h3>UPI ID #1  <input></input></h3>
          <h3>UPI ID #2  <input></input></h3>
        </div>
        :
        <div>
          <h3>UPI ID #1  <span>{user?.upiId1?user.upiId1:'N/A'}</span></h3>
          <h3>UPI ID #2  <span>{user?.upiId2?user.upiId2:'N/A'}</span></h3>
        </div>
      }
    </div>
    {
      props.toedit?
      <div className='update-btn'>
        <button>Update</button>
      </div>
      :""
    }
  </div>
  )
}

export default ProfileComponent
