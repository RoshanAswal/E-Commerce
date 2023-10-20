import React, { useEffect, useState } from 'react'
import img1 from '../../images/animeImage5.png';
import img2 from '../../images/animeImage4.png';
import img3 from '../../images/animeImage7.png';
import img4 from '../../images/animeImage8.png';
import img5 from '../../images/animeImage9.png';
import img6 from '../../images/animeImage10.png';
import del from '../../images/delete.png';
import timer from '../../images/stopwatch.png';

import './HistoryProducts.css';

const HistoryProducts = () => {
    const [ImgArr,setImgArr]=useState([]);
    useEffect(()=>{
        setImgArr([img1,img2,img3,img4,img5,img6]);
    },[]);

    return (
    <div className='History-Products'>
        {
            ImgArr.map((img,key) => (
                <div className='history-product-card' key={key}>
                    <div className='history-product'>
                        <img src={img} alt='t-shirt img' />
                        <div className='history-img-description'>
                            <div className='product-header'>
                                <h3>Anime T-shirt</h3>
                                <h4>Only 1X4</h4>
                            </div>
                            <div className='product-date'>
                                <img src={timer} alt='timer'></img>
                                <h4>1 Jan 2023</h4>
                            </div>
                        </div>
                    </div>
                    <div className='del-btn'>
                        <img src={del} alt='del'></img>
                    </div>
                    <div className='show-detail-btn'>
                        <button>Show details</button>
                    </div>
                </div>                
            ))
        }

    </div>
  )
}

export default HistoryProducts
