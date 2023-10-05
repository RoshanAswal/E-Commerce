import React from 'react'
import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({img}) {
  return (
    <div className='ProductCard'>
      <div className='product-img-div'>
        <img src={img} alt='img' draggable="false"></img>
        <Link to="/productList"></Link>
      </div>
      <div className='product-namePrice-div'>
        <h2>Name</h2>
        <h3>5000</h3>
      </div>
    </div>
  )
}

export default ProductCard
