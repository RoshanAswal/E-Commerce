import React, { useState } from 'react'
import './Sidebar.css';
import women from '../../images/woman.png';
import search from '../../images/search.png';
import setting from '../../images/settings.png'
import profile from '../../images/profile-user.png'
import { Link } from 'react-router-dom';
// import SignupPage from '../../pages/SignupPage/SignupPage';

const Sidebar = () => {
    const [price,setPrice]=useState(0);
  return (
    <div className='Sidebar'>
        <div className='Logo-div'>
            <img src={women} alt='women'></img>
            <h2>E-Mart</h2>
        </div>
        <div className='Filter-div'>
            <div className='Search-div'>
                <input type='text'/>
                <img src={search} alt='search'></img>
            </div>
            <div className='Gender-age-div'>
                <select>
                    <option value="Men" selected>Men</option>
                    <option value="Women" >Women</option>
                    <option value="Kids" >Kids</option>
                </select>
                <select>
                    <option value="1-10" selected>10-20</option>
                    <option value="11-20" >20-40</option>
                    <option value="21-40" >40-60</option>
                    <option value="41 above" >60-100</option>
                </select>
            </div>
            <div className='Range-div'>
                <div className='price-tag'>
                    <h4>{price}₹</h4>
                </div>
                <input type='range' min="100" max="10000" onInput={e=>{setPrice(e.target.value)}}/>
            </div>
            <div className='Brands-div'>
                <h3>Brands</h3>
                <select>
                    <option value="Gucci">Gucci</option>
                    <option value="Levi">Levi</option>
                    <option value="H&M">H&M</option>
                    <option value="All">All</option>
                </select>
            </div>
            <div className='Season-div'>
                <h3>Season</h3>
                <select>
                    <option value="Winter">Winter</option>
                    <option value="Summer">Summer</option>
                    <option value="all season">All</option>
                </select>
            </div>
        </div>
        <div className='Menu-div'>
            <div className='options-div'>
                <Link to="/signup">
                <img id='profile' src={profile} alt='profile'></img>
                </Link>
                <img id='setting' src={setting} alt='setting'></img>
            </div>
            <div className='credential-div'>
                <h3>Developed by Roshan Aswal</h3>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
