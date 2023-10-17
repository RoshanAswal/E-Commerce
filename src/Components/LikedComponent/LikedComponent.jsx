import React from 'react'

const LikedComponent = () => {
  return (
    <div>
        <div className='liked-header'>
            <h2>Your Liked Products Cart</h2>
            <img alt='cart-img'></img>
        </div>
        <div className='cart-details'>
            <div className='column-items'>
                <div className='col1'>
                    <h3>Item</h3>
                </div>
                <div className='col2'>
                    <h3>Quantity</h3>
                </div>
                <div className='col3'>
                    <h3>Price</h3>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default LikedComponent
