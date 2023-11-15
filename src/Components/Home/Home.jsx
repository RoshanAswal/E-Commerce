import React, { useEffect, useState,useContext} from 'react'
import styles from './Home.module.css';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import { FilterContext } from '../../Context/FilterContext';

import male1 from '../../images/maleModel/model1.avif';
import male2 from '../../images/maleModel/model2.avif';
import male3 from '../../images/maleModel/model3.avif';
import male4 from '../../images/maleModel/model4.avif';
import male5 from '../../images/maleModel/model5.avif';
import fmale1 from '../../images/femaleModel/fmodel3.avif';
import fmale2 from '../../images/femaleModel/fmodel4.avif';
import fmale3 from '../../images/femaleModel/fmodel5.avif';
import fmale4 from '../../images/femaleModel/fmodel6.avif';
import fmale5 from '../../images/femaleModel/fmodel2.avif';


// import { useSelector } from 'react-redux';

const Home = () => {
  const [arrM,setArrM]=useState([]);
  const [arrF,setArrF]=useState([]);
  const [products,setProducts]=useState([]);

  const {gender,age,price,brand,season}=useContext(FilterContext);
  // const isLoggedIn=useSelector(state=>state.loggedIn);


  useEffect(()=>{

    const fetchProducts=async ()=>{
      try{
        const response=await axios.get(`${process.env.REACT_APP_REMOTE_URL}`);
        setProducts(response?.data?.products);
        
      }catch(err){
        console.log(err);
      }
    }
    fetchProducts();
  },[]);
  useEffect(()=>{
    
    setArrM([male1,male2,male3,male4,male5,male1,
            male2,male3,male4,male5,male1,male2,
            male3,male4,male5]);
    setArrF([fmale1,fmale2,fmale3,fmale4,fmale5,
            fmale1,fmale2,fmale3,fmale4,fmale5,
            fmale1,fmale2,fmale3,fmale4,fmale5])
  },[]);
  return (
    <div className={styles.Home}>
      <h1 className={styles.message}>All your wants and needs of t-shirt is <span style={{color:'red'}}>Here</span></h1>
      <div className={styles.ProductCards}>
        {
          products?.map((e,key)=>{
            let ind=Math.floor(Math.random()*arrM.length)
            // return <ProductCard img={arrM[ind%(arrF.length)]} pro={e}/>
            return gender==="Men"
            ?    
            e.minAge<=age && 
            (e.productPrice<=price) && 
            (brand==='All' || e.brand===brand) &&
            (season==='All' || e.Season===season)
              ?
              <ProductCard key={key} img={arrM[ind%(arrM.length)]} pro={e}/>
              :""
            :
            e.minAge<=age && 
            (e.productPrice<=price) && 
            (brand==='All' || e.brand===brand) &&
            (season==='All' || e.Season===season)
              ?
              <ProductCard key={key} img={arrF[ind%(arrF.length)]} pro={e}/>
              :""
          })

        }
      </div>
      <h1 className={styles.footer}> Copyright @ 2002</h1>
    </div>
  )
}

export default Home
