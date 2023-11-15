import React, { useEffect,useState } from 'react';
import styles from './LikedComponent.module.css';
import cartImg from '../../images/cart.png';
import tshirt from '../../images/maleModel/model1.avif';
import tshirt1 from '../../images/femaleModel/fmodel1.avif';
import tshirt2 from '../../images/maleModel/model2.avif';
import tshirt3 from '../../images/femaleModel/fmodel2.avif';
import tshirt4 from '../../images/maleModel/model3.avif';
import tshirt5 from '../../images/femaleModel/fmodel3.avif';
import leftArrow from '../../images/left-arrow.png';
import rightArrow from '../../images/right-arrow.png';
import deleteImg from '../../images/delete.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const LikedComponent = () => {

    const userId=window.localStorage.getItem('userId');
    const [products,setProducts]=useState([]);
    const [images,_]=useState([tshirt,tshirt1,tshirt2,tshirt3,tshirt4,tshirt5]);

    useEffect(()=>{
        const fetchLikedProducts=async ()=>{
            const response=await axios.get(`${process.env.REACT_APP_REMOTE_URL}profile/${userId}/cart`);
            if(response.data.products!=null)
                setProducts(response?.data?.products);
        }
        fetchLikedProducts();
    },[]);

    const showMessage=(msg)=>{
        if(msg!=='error'){
            toast.success(msg,{
                position:toast.POSITION.TOP_RIGHT
            })
        }else{
            toast.error(msg,{
                position:toast.POSITION.TOP_RIGHT
            })
        }
        setTimeout(()=>{
            window.location.reload();
        },1000);
    }

    const addInHistory=async (e)=>{
        e.preventDefault();
        const response=await axios.put(`${process.env.REACT_APP_REMOTE_URL}profile/cart/checkout/${userId}`);
        showMessage(response.data.data);
    }

    const deleteFromCart=async (e,index)=>{
        e.preventDefault();
        const response=await axios.put(`${process.env.REACT_APP_REMOTE_URL}profile/${userId}/deleteProduct`,{
            model:'liked',index
        });
        showMessage(response.data.data);
    }

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
                {
                    products.map((product,index)=>(
                        <div key={index} className={styles.item}>
                            <div className={styles.itemDes}>
                                <div className={styles.imgDiv}>
                                    <img id={styles.del} onClick={(e)=>{deleteFromCart(e,index)}} src={deleteImg} alt='del'></img>
                                    <img id={styles.productImg} src={images[(index)%6]} alt='t-shirt'></img>
                                </div>
                                <div className={styles.itemDetail}>
                                    <h2>{product.productName}</h2>
                                    <h3>{product.productDescription}</h3>
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
                                <h3>{product.productPrice}₹</h3>
                            </div>
                        </div>
                    ))
                }
                {/* <div className={styles.item}>
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

                </div> */}
                <div className={styles.checkoutSection}>
                    <button className={styles.checkoutBtn} onClick={e=>addInHistory(e)} >Checkout</button>
                </div>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default LikedComponent
