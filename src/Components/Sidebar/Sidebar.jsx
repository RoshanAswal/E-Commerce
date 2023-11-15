import React, { useEffect, useContext, useState } from 'react';
import { FilterContext } from '../../Context/FilterContext';

import styles from './Sidebar.module.css';
import women from '../../images/woman.png';
import search from '../../images/search.png';
import setting from '../../images/settings.png';
import profile from '../../images/profile-user.png';
import leftArrow from '../../images/left-arrow.png';
import rightArrow from '../../images/right-arrow.png';

import { Link} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction, LogoutAction } from '../../ReduxContainer/ActionCreator';

const Sidebar = () => {
    const {price,setPrice,setGender,
        setAge,setBrand,setSeason}=useContext(FilterContext);
        
    const isLoggedIn=useSelector(state=>state.loggedIn);
    const dispatch=useDispatch();

    const [cookie,_]=useCookies(["access_token"]);
    const [arrowImg,setArrowImg]=useState(rightArrow);
    const [slideCls,setSlideCls]=useState(styles.minFilter)

    // useEffect(()=>{
    //     if(cookie.access_token!==null){
    //         dispatch(LoginAction());
    //     }
    // },[]);


    const logoutActionFunction=(e)=>{
        e.preventDefault();
        dispatch(LogoutAction())
        window.localStorage.removeItem('userId');
    }
    const changeArrowImg=(e)=>{
        e.preventDefault();
        if(arrowImg===leftArrow){
            setArrowImg(rightArrow);
            setSlideCls(styles.minFilter);
        }else{
            setArrowImg(leftArrow);
            setSlideCls(styles.minFilter1);
        }
    }
  return (
    <div>
        <div className={styles.minSidebar}>
            <div className={styles.minLogoDiv}>
                <img src={women} alt='women'></img>
                <h2><span style={{color:'#FF0800'}}>E</span>-<span style={{color:'#FBD3DE'}}>Mart</span></h2>
            </div>
            <div className={styles.arrow}>
                <img src={arrowImg} alt='arrow' onClick={(e)=>changeArrowImg(e)}></img>
            </div>
            <div className={slideCls}>
                <div className={styles.minLogoDiv}>
                    <img src={women} alt='women'></img>
                    <h2><span style={{color:'#FF0800'}}>E</span>-<span style={{color:'#FBD3DE'}}>Mart</span></h2>
                </div>
                <div className={styles.FilterDiv}>
                    <div className={styles.SearchDiv}>
                        <input type='text'/>
                        <img src={search} alt='search'></img>
                    </div>
                    <div className={styles.GenderAgeDiv}>
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
                    <div className={styles.RangeDiv}>
                        <div className={styles.priceTag}>
                            <h3>{"< "}{price}₹</h3>
                        </div>
                        <input type='range' min="2000" max="10000" onInput={e=>{setPrice(e.target.value)}}/>
                    </div>
                    <div className={styles.BrandsDiv}>
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
                    <div className={styles.SeasonDiv}>
                        <h3>Season</h3>
                        <select onChange={e=>{setSeason(e.target.value)}}>
                            <option value="All" selected>All</option>
                            <option value="Winter">Winter</option>
                            <option value="Summer">Summer</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.minProfileOptions}>
                <div className={styles.optionsDiv}>
                    <Link to={isLoggedIn==='True'?"/profile":"/signup"}>
                    <img id={styles.profile} src={profile} alt='profile'></img>
                    </Link>
                    <img id={styles.setting} src={setting} 
                        onClick={e=>logoutActionFunction(e)}
                    alt='setting'></img>
                </div>
            </div>        
        </div>

        <div className={styles.Sidebar}>
            <div className={styles.LogoDiv}>
                <img src={women} alt='women'></img>
                <h2><span style={{color:'#FF0800'}}>E</span>-<span style={{color:'#FBD3DE'}}>Mart</span></h2>
            </div>
            <div className={styles.FilterDiv}>
                <div className={styles.SearchDiv}>
                    <input type='text'/>
                    <img src={search} alt='search'></img>
                </div>
                <div className={styles.GenderAgeDiv}>
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
                <div className={styles.RangeDiv}>
                    <div className={styles.priceTag}>
                        <h3>{"> "}{price}₹</h3>
                    </div>
                    <input type='range' min="2000" max="10000" onInput={e=>{setPrice(e.target.value)}}/>
                </div>
                <div className={styles.BrandsDiv}>
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
                <div className={styles.SeasonDiv}>
                    <h3>Season</h3>
                    <select onChange={e=>{setSeason(e.target.value)}}>
                        <option value="All" selected>All</option>
                        <option value="Winter">Winter</option>
                        <option value="Summer">Summer</option>
                    </select>
                </div>
            </div>

            <div className={styles.MenuDiv}>
                <div id={styles.MenuOptions}>
                    <div className={styles.optionsDiv}>
                        <Link to={isLoggedIn==='True'?"/profile":"/signup"}>
                        <img id={styles.profile} src={profile} alt='profile'></img>
                        </Link>
                        <img id={styles.setting} src={setting} 
                            onClick={e=>logoutActionFunction(e)}
                        alt='setting'></img>
                    </div>
                    <div className={styles.credentialDiv}>
                        <h3>Developed by Roshan Aswal</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
