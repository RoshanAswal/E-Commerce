import React from 'react';
import './LikedComponent.css';
import cartImg from '../../images/cart.png';
import tshirt from '../../images/animeImage1.png';
import tshirt1 from '../../images/animeImage10.png';
import leftArrow from '../../images/left-arrow.png';
import rightArrow from '../../images/right-arrow.png';
import deleteImg from '../../images/delete.png';

const LikedComponent = () => {
  return (
    <div className='liked-component'>
        <div className='liked-header'>
            <h2>Liked Products Cart</h2>
            <img src={cartImg} alt='cart-img'></img>
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
            <hr></hr>
            <div className='items-section'>
                <div className='item'>
                    <div className='item-des'>
                        <div className='img-div'>
                            <img id="del" src={deleteImg} alt='del'></img>
                            <img src={tshirt} alt='t-shirt'></img>
                        </div>
                        <div className='item-detail'>
                            <h2>Anime T-shirt</h2>
                            <h3>T-shirt description</h3>
                        </div>
                    </div>

                    <div className='item-amount'>
                        <div>
                            <img src={leftArrow} alt='left'></img>
                            <button>1</button>
                            <img src={rightArrow} alt='right'></img>
                        </div>
                    </div>
                    <div className='item-price'>
                        <h3>500₹</h3>
                    </div>
                </div>
                <hr></hr>
                <div className='item'>
                    <div className='item-des'>
                        <div className='img-div'>
                            <img id="del" src={deleteImg} alt='del'></img>
                            <img src={tshirt1} alt='t-shirt'></img>
                        </div>
                        <div className='item-detail'>
                            <h2>Anime T-shirt</h2>
                            <h3>T-shirt description</h3>
                        </div>
                    </div>

                    <div className='item-amount'>
                        <div>
                            <img src={leftArrow} alt='left'></img>
                            <button>1</button>
                            <img src={rightArrow} alt='right'></img>
                        </div>
                    </div>
                    <div className='item-price'>
                        <h3>500₹</h3>
                    </div>
                </div>
                <div className='checkout-section'>
                    <button className='checkout-btn'>Checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LikedComponent
