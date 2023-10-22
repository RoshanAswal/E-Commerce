import React, { useEffect, useState } from 'react'

import img1 from '../../images/animeImage5.png';
import img2 from '../../images/animeImage4.png';
import img3 from '../../images/animeImage7.png';
import img4 from '../../images/animeImage8.png';
import img5 from '../../images/animeImage9.png';
import img6 from '../../images/animeImage10.png';


import HistoryProductCard from '../HistoryProductCard/HistoryProductCard';

import './HistoryProducts.css';

const HistoryProducts = () => {
    const [ImgArr,setImgArr]=useState([]);

    useEffect(()=>{
        setImgArr([img1,img2,img3,img4,img5,img6]);
    },[]);

    return (
    <div className='History-Products'>
        {
            ImgArr.map((img,key) =>
                <HistoryProductCard key={key} img={img}/>
            )
        }

    </div>
  )
}

export default HistoryProducts
