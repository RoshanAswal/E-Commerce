import React, { useEffect, useContext } from 'react';
import { FilterContext } from '../../Context/FilterContext';
import './Sidebar.css';
import women from '../../images/woman.png';
import search from '../../images/search.png';
import setting from '../../images/settings.png';
import profile from '../../images/profile-user.png';
import { Link,useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction, LogoutAction } from '../../ReduxContainer/ActionCreator';

const Sidebar = () => {
    const {price,setPrice,setGender,
        setAge,setBrand,setSeason}=useContext(FilterContext);
    const isLoggedIn=useSelector(state=>state.loggedIn);
    const dispatch=useDispatch();

    const navigate=useNavigate();
    const [cookie,setCookie]=useCookies(["access_token"]);

    useEffect(()=>{
        if(cookie.access_token!==null){
            dispatch(LoginAction());
        }
    },[]);

    const logoutActionFunction=()=>{
        dispatch(LogoutAction())
        window.localStorage.removeItem('userId');
    }

  return (
    <div className='Sidebar'>
        <div className='Logo-div'>
            <img src={women} alt='women'></img>
            <h2><span style={{color:'#FF0800'}}>E</span>-<span style={{color:'black'}}>Mart</span></h2>
        </div>
        <div className='Filter-div'>
            <div className='Search-div'>
                <input type='text'/>
                <img src={search} alt='search'></img>
            </div>
            <div className='Gender-age-div'>
                <select onChange={e=>{setGender(e.target.value)}}>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                </select>
                <select onChange={e=>{setAge(e.target.value)}}>
                    <option value="20" >20</option>
                    <option value="40" >40</option>
                    <option value="50" >50</option>
                    <option value="70" selected>70</option>
                </select>
            </div>
            <div className='Range-div'>
                <div className='price-tag'>
                    <h3>{"< "}{price}₹</h3>
                </div>
                <input type='range' min="2000" max="10000" onInput={e=>{setPrice(e.target.value)}}/>
            </div>
            <div className='Brands-div'>
                <h3>Brands</h3>
                <select onChange={e=>{setBrand(e.target.value)}}>
                    <option value="All" selected>All</option>
                    <option value="Gucci">Gucci</option>
                    <option value="Nike">Nike</option>
                    <option value="Puma">Puma</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Armani">Armani</option>
                    <option value="Nautica">Nautica</option>
                </select>
            </div>
            <div className='Season-div'>
                <h3>Season</h3>
                <select onChange={e=>{setSeason(e.target.value)}}>
                    <option value="All" selected>All</option>
                    <option value="Winter">Winter</option>
                    <option value="Summer">Summer</option>
                </select>
            </div>
        </div>

        <div className='Menu-div'>
            <div id='Menu-options'>
                <div className='options-div'>
                    <Link to={isLoggedIn==='True'?"/profile":"/signup"}>
                    <img id='profile' src={profile} alt='profile'></img>
                    </Link>
                    <img id='setting' src={setting} 
                        onClick={logoutActionFunction}
                    alt='setting'></img>
                </div>
                <div className='credential-div'>
                    <h3>Developed by Roshan Aswal</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
