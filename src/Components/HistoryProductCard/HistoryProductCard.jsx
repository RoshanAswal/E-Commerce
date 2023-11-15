import {React,useState} from 'react';
import delImg from '../../images/delete.png';
import timerImg from '../../images/stopwatch.png';

import styles from './HistoryProductCard.module.css';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HistoryProductCard = (props) => {

    const [showDetail,setShowDetail]=useState(false);

    const userId=window.localStorage.getItem('userId');

    const deleteProduct=async ()=>{
        const response=await axios.put(`${process.env.REACT_APP_REMOTE_URL}profile/${userId}/deleteProduct`,
        {model:'his',index:props.key});
        const msg=response.data.data;
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

    return (
    <div className={styles.products_card}>
        <div className={styles.mainImg}>
            <img src={props.img} alt='t-shirt img' />
        </div>   
        <div className={styles.history_product_description}>
            {
                showDetail
                ?
                <div className={styles.detail_description}>
                <table cellSpacing="10px">
                    <tr>
                        <td id={styles.Q}>Product Name </td>
                        <td id={styles.A}>{props.product.productName}</td>
                    </tr>
                    <tr>
                        <td id={styles.Q}>Product Price </td>
                        <td id={styles.A}>{props.product.productPrice}₹</td>
                    </tr>
                    <tr>
                        <td id={styles.Q}>Gender</td>
                        <td id={styles.A}>{props.product.gender}</td>
                    </tr>
                    <tr>
                        <td id={styles.Q}>Brand</td>
                        <td id={styles.A}>{props.product.brand}</td>
                    </tr>
                    <tr>
                        <td id={styles.Q}>Gender</td>
                        <td id={styles.A}>{props.product.season}</td>
                    </tr>
                </table>
                </div>
            :
                <div className={styles.history_img_description}>
                    <div className={styles.product_header}>
                        <h3>{props.product.productName}</h3>
                        <h4>{props.product.productPrice}</h4>
                    </div>
                    <div className={styles.product_date}>
                        <img src={timerImg} alt='timer'></img>
                        <h4>1 Jan 2023</h4>
                    </div>
                </div>

            }
        </div>
        <div className={styles.other_option}>
            <div className={styles.del_btn}>
                <img src={delImg} alt='del' onClick={deleteProduct}></img>
            </div>
            <div className={styles.show_detail_btn}>
                <button onClick={e=>{setShowDetail(!showDetail)}}>
                    {!showDetail?'Show Details':'Hide Details'}
                </button>
            </div>
        </div> 
        <ToastContainer/>
    </div>                
)
}

export default HistoryProductCard
