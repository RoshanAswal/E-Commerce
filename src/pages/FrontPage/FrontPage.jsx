import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Home from '../../Components/Home/Home';
import styles from './FrontPage.module.css';
import { FilterContext } from '../../Context/FilterContext';

const FrontPage = () => {
  const [price,setPrice]=useState(2000);
  const [gender,setGender]=useState('Men');
  const[age,setAge]=useState(100);
  const [brand,setBrand]=useState('All');
  const [season,setSeason]=useState('All');
  return (
    <div className={styles.FrontPage}>
      <FilterContext.Provider 
        value={{price,setPrice,gender,setGender,age,setAge,brand,setBrand,season,setSeason}}
      >
        <Sidebar/>
        <Home/>
      </FilterContext.Provider>
    </div>
  )
}

export default FrontPage
