import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Home from '../../Components/Home/Home';
import ProductList from '../../Components/ProductList/ProductList'
import './FrontPage.css';

const FrontPage = () => {
  const {showProducts,setShowProducts}=useState(0);

  return (
    <div className='FrontPage'>
      <Sidebar/>
      {
        showProducts?<ProductList/>:<Home/>
      }
    </div>
  )
}

export default FrontPage
