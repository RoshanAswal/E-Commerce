import React from 'react';
import styles from './LikedComponent.module.css';
import cartImg from '../../images/cart.png';
import tshirt from '../../images/maleModel/model1.avif';
import tshirt1 from '../../images/femaleModel/fmodel1.avif';
import leftArrow from '../../images/left-arrow.png';
import rightArrow from '../../images/right-arrow.png';
import deleteImg from '../../images/delete.png';

const LikedComponent = () => {
  return (
    <div className={styles.likedComponent}>
        <div className={styles.likedHeader}>
            <h2>Liked Products Cart</h2>
            <img src={cartImg} alt='cart-img'></img>
        </div>
        <div className={styles.cartDetails}>
            <div className={styles.columnItems}>
                <div className={styles.col1}>
                    <h3>Item</h3>
                </div>
                <div className={styles.col2}>
                    <h3>Quantity</h3>
                </div>
                <div className={styles.col3}>
                    <h3>Price</h3>
                </div>
            </div>
            <hr></hr>
            <div className={styles.itemsSection}>
                <div className={styles.item}>
                    <div className={styles.itemDes}>
                        <div className={styles.imgDiv}>
                            <img id={styles.del} src={deleteImg} alt='del'></img>
                            <img src={tshirt} alt='t-shirt'></img>
                        </div>
                        <div className={styles.itemDetail}>
                            <h2>Anime T-shirt</h2>
                            <h3>T-shirt description</h3>
                        </div>
                    </div>
                    <div className={styles.itemAmount}>
                        <div>
                            <img src={leftArrow} alt='left'></img>
                            <button>1</button>
                            <img src={rightArrow} alt='right'></img>
                        </div>
                    </div>
                    <div className={styles.itemPrice}>
                        <h3>500₹</h3>
                    </div>

                </div>
                <hr></hr>
                <div className={styles.item}>
                    <div className={styles.itemDes}>
                        <div className={styles.imgDiv}>
                            <img id={styles.del} src={deleteImg} alt='del'></img>
                            <img src={tshirt1} alt='t-shirt'></img>
                        </div>
                        <div className={styles.itemDetail}>
                            <h2>Anime T-shirt</h2>
                            <h3>T-shirt description</h3>
                        </div>
                    </div>

                    <div className={styles.itemAmount}>
                        <div>
                            <img src={leftArrow} alt='left'></img>
                            <button>1</button>
                            <img src={rightArrow} alt='right'></img>
                        </div>
                    </div>
                    <div className={styles.itemPrice}>
                        <h3>500₹</h3>
                    </div>

                </div>
                <div className={styles.checkoutSection}>
                    <button className={styles.checkoutBtn}>Checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LikedComponent
