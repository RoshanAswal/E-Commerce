import React, { useEffect, useState } from 'react'

import img1 from '../../images/maleModel/model3.avif';
import img2 from '../../images/maleModel/model4.avif';
import img3 from '../../images/femaleModel/fmodel3.avif';
import img4 from '../../images/maleModel/model2.avif';
import img5 from '../../images/femaleModel/fmodel3.avif';
import img6 from '../../images/femaleModel/fmodel6.avif';

import axios from 'axios';
import HistoryProductCard from '../HistoryProductCard/HistoryProductCard';
import styles from './HistoryProducts.module.css';


const HistoryProducts = () => {
    const [ImgArr,_]=useState([img1,img2,img3,img4,img5,img6]);
    const [products,setProducts]=useState([]);

    const userId=window.localStorage.getItem('userId');

    useEffect(()=>{
        const fetchLikedProducts=async ()=>{
            const response=await axios.get(`${process.env.REACT_APP_LOCAL_URL}profile/${userId}/history`);
            if(response.data.products!=null)
                setProducts(response?.data?.products);
        }
        fetchLikedProducts();
    },[]);


    return (
    <div className={styles.HistoryProducts}>
        {
            products.map((product,index)=>(
                <HistoryProductCard key={index} img={ImgArr[index%6]} product={product}/>                
            ))
        }

    </div>
  )
}

export default HistoryProducts
