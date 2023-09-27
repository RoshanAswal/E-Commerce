import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Home from '../../Components/Home/Home'
import './FrontPage.css';

const FrontPage = () => {
  return (
    <div className='FrontPage'>
      <Sidebar/>
      <Home/>
    </div>
  )
}

export default FrontPage
