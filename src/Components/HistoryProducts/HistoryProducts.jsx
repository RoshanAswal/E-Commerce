import React, { useEffect, useState } from 'react'

import img1 from '../../images/maleModel/model3.avif';
import img2 from '../../images/maleModel/model4.avif';
import img3 from '../../images/femaleModel/fmodel3.avif';
import img4 from '../../images/maleModel/model2.avif';
import img5 from '../../images/femaleModel/fmodel3.avif';
import img6 from '../../images/femaleModel/fmodel6.avif';


import HistoryProductCard from '../HistoryProductCard/HistoryProductCard';
import styles from './HistoryProducts.module.css';


const HistoryProducts = () => {
    const [ImgArr,setImgArr]=useState([]);

    useEffect(()=>{
        setImgArr([img1,img2,img3,img4,img5,img6]);
    },[]);

    return (
    <div className={styles.HistoryProducts}>
        {
            ImgArr.map((img,key) =>
                <HistoryProductCard key={key} img={img}/>
            )
        }

    </div>
  )
}

export default HistoryProducts
