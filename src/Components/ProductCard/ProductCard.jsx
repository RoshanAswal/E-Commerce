import React from 'react'
import styles from './ProductCard.module.css';
import {useNavigate } from 'react-router-dom';

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
    <div className={styles.ProductCard}>
      <img src={props.img} alt='img' draggable="false"
      onClick={handleClick}></img>
      <div className={styles.productNamePriceDiv}>
        <h2>{props.pro.productName}</h2>
        <h3>{props.pro.productPrice} ₹</h3>
      </div>
    </div>
  )
}

export default ProductCard
