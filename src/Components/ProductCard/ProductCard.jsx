import React from 'react'
import './ProductCard.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function ProductCard(props) {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate(`/productPage/${props.pro._id}`,{
      state:{
        img:props.img
      }
    });
  }

  return (
    <div className='ProductCard'>
      <div className='product-img-div'>
        <img src={props.img} alt='img' draggable="false"
        onClick={handleClick}></img>
      </div>
      <div className='product-namePrice-div'>
        <h2>{props.pro.productName}</h2>
        <h3>{props.pro.productPrice}</h3>
      </div>
    </div>
  )
}

export default ProductCard
