import React from 'react'
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <div className='Logo-div'>
            <h2>E-Mart</h2>
        </div>
        <div className='Filter-div'>
            <div className='Search-div'>
                <input type='text'/>
                <h2>S</h2>
            </div>
            <div className='Gender-age-div'>
                <select>
                    <option value="Men" selected>Men</option>
                    <option value="Women" >Women</option>
                    <option value="Kids" >Kids</option>
                </select>
                <select>
                    <option value="1-10" selected>10</option>
                    <option value="11-20" >20</option>
                    <option value="21-40" >40</option>
                    <option value="41 above" >100</option>
                </select>
            </div>
            <div className='Range-div'>
                <div className='price-tag'>
                    <h4>100</h4>
                    <h4>1Lac</h4>
                </div>
                <input type='range' min="100" max="100000"/>
            </div>
            <div className='Brands-div'>
                <h3>Brands : 0</h3>
                <select>
                    <option value="Gucci">Gucci</option>
                    <option value="Levi">Levi</option>
                    <option value="H&M">H&M</option>
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
            <div className='profile-btn'>profile</div>
            <div className='login-btn'>Login</div>
        </div>
    </div>
  )
}

export default Sidebar
