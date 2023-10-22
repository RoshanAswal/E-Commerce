import {React,useState} from 'react';
import delImg from '../../images/delete.png';
import timerImg from '../../images/stopwatch.png';

import styles from './HistoryProductCard.module.css';

const HistoryProductCard = ({img}) => {

    const [showDetail,setShowDetail]=useState(false);

    return (
    <div className={styles.products_card}>
        <div className={styles.history_product_card}>
            <img src={img} alt='t-shirt img' />
            {
                showDetail
                ?
                <div className={styles.detail_description}>
                <table cellSpacing="10px">
                    <tr>
                        <td id={styles.Q}>Product Name </td>
                        <td id={styles.A}>Anime T-shirt</td>
                    </tr>
                    <tr>
                        <td id={styles.Q}>Quantity </td>
                        <td id={styles.A}>1 X 4</td>
                    </tr>
                    <tr>
                        <td id={styles.Q}>Total amount paid</td>
                        <td id={styles.A}>2000₹</td>
                    </tr>
                    <tr>
                        <td id={styles.Q}>Date of Purchase </td>
                        <td id={styles.A}>1 Jan 2023</td>
                    </tr>
                    <tr>
                        <td id={styles.Q}>Date of Delivery </td>
                        <td id={styles.A}>5 Jan 2023</td>
                    </tr>
                </table>
                </div>
            :
                <div className={styles.history_img_description}>
                    <div className={styles.product_header}>
                        <h3>Anime T-shirt</h3>
                        <h4>Only 1X4</h4>
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
                <img src={delImg} alt='del'></img>
            </div>
            <div className={styles.show_detail_btn}>
                <button onClick={e=>{setShowDetail(!showDetail)}}>
                    {!showDetail?'Show Details':'Hide Details'}
                </button>
            </div>
        </div> 

    </div>                
)
}

export default HistoryProductCard
