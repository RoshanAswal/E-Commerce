import React, { useEffect, useState } from 'react'
import './Home.css';
import ProductCard from '../ProductCard/ProductCard';
import AkatsukiImg from '../../images/AkatsukiTshirtProduct.png';
import AnimeTshirt1 from '../../images/animeImage1.png';
import AnimeTshirt2 from '../../images/animeImage2.png';
import AnimeTshirt3 from '../../images/animeImage3.png';
import AnimeTshirt4 from '../../images/animeImage4.png';
import AnimeTshirt5 from '../../images/animeImage5.png';
import AnimeTshirt6 from '../../images/animeImage6.png'; 
import AnimeTshirt7 from '../../images/animeImage7.png';
import AnimeTshirt8 from '../../images/animeImage8.png';
import AnimeTshirt9 from '../../images/animeImage9.png';
import AnimeTshirt10 from '../../images/animeImage10.png';
import AnimeTshirt11 from '../../images/animeImage11.png';
import { useSelector } from 'react-redux';

const Home = () => {
  const [arr,setArr]=useState([]);
  const isLoggedIn=useSelector(state=>state.loggedIn);
  useEffect(()=>{
    setArr([AkatsukiImg,AnimeTshirt1,AnimeTshirt2,AnimeTshirt3,
      AnimeTshirt4,AnimeTshirt5,AnimeTshirt6,AnimeTshirt7,AnimeTshirt8,
      AnimeTshirt9,AnimeTshirt10,AnimeTshirt11]);
  },[]);
  return (
    <div className='Home'>
      <h1>Products {isLoggedIn}</h1>
      <div className='ProductCards'>
        {
          arr.map((image)=>(
            <ProductCard img={image}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home
