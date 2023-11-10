import {React,useEffect,useState} from 'react'
import { useLocation, useParams } from 'react-router-dom';
import img1 from "../../images/maleModel/model1.avif";
import img2 from "../../images/maleModel/model2.avif";
import img3 from "../../images/femaleModel/fmodel5.avif";
import img4 from "../../images/femaleModel/fmodel6.avif";
import women from '../../images/woman.png';
import bag from '../../images/bag.png';
import heart from '../../images/heart.png';

import styles from './ProductPage.module.css';
import axios from 'axios';

const ProductPage = () => {
  const location=useLocation();

  const [showDes,setShowDes]=useState(true);
  const [cls1,setcls1]=useState(styles.underline);
  const [cls2,setcls2]=useState(styles.noUnderline);
  const [mainImg,setMainImage]=useState(location.state.img);
  const [Img1,setImage1]=useState(img2);
  const [Img2,setImage2]=useState(img3);
  const [Img3,setImage3]=useState(img4);
  const [product,setProduct]=useState();

  let {productId}=useParams();
  
  
  useEffect(()=>{

    const fetchProduct=async ()=>{
      try{
        const response=await axios.get(`https://e-commerce-backend-pearl.vercel.app/${productId}`);
        setProduct(response.data.product);
      }catch(err){
        console.log(err);
      }
    }
    fetchProduct();
  },[]);

  const showMessage=async ()=>{
    window.alert("added to cart");
    try{
      const response=new axios.post(`https://e-commerce-backend-pearl.vercel.app/${productId}/addCart`);
      
    }catch(err){
      console.log(err);
    }
  }
  return product && (
    <div className={styles.productPage}>
      <div className={styles.LogoDiv}>
          <img src={women} alt='women'></img>
          <h2 style={{color:'black'}}><span style={{color:'#FF0800'}}>E</span>-<span>Mart</span></h2>
      </div>
      <div id={styles.productMidDiv}>
        <div id={styles.productImageDiv}>
          <img src={mainImg} alt="" id={styles.mainImage} />
          <div id={styles.sampleDiv}>
            <img src={Img1} alt="" onClick={e=>{
              setMainImage(Img1);
              setImage1(mainImg);
            }}/>
            <img src={Img2} alt="" onClick={e=>{
              setMainImage(Img2);
              setImage2(mainImg);
            }} />
            <img src={Img3} alt="" onClick={e=>{
              setMainImage(Img3);
              setImage3(mainImg);
            }} />
          </div>
        </div>
        <div id={styles.productDetailDiv}>
          <div id={styles.nameAndColor}>
            <div id={styles.shortDetailDiv}>
              <h1>{product.productName}</h1>
              <h3>{product.productPrice} ₹</h3>
            </div>
            <div id={styles.colorDiv}>
              <h3>Color</h3>
              <button id={styles.color1}></button>
              <button id={styles.color2}></button>
              <button id={styles.color3}></button>
            </div>
          </div>
          <div id={styles.sizeDiv}>
            <h3>Size</h3>
            <div id={styles.sizeBtns}>
              <button>33</button>
              <button>34</button>
              <button>35</button>
              <button>36</button>
              <button>37</button>
            </div>
          </div>
          <div id={styles.productAddDiv}>
            <button id={styles.addBtn} onClick={showMessage}>Add to Bag <img src={bag} /></button>
            {/* <button id={styles.favBtn}>Fav<img src={heart}/></button>  */}
          </div>
          <div id={styles.benefitDiv}>
            <h3>Free shipping </h3>
            <h3>25% off</h3>
          </div>
          <div id={styles.DescriptionDiv}>
            <div id={styles.chooseDiv}>
              <h2 className={cls1} 
                onClick={()=>{
                  setcls1(styles.underline);setcls2(styles.noUnderline)
                  setShowDes(true);
                }}
              >
                Description
              </h2>
              <h2 className={cls2} 
                onClick={()=>{
                  setcls2(styles.underline);setcls1(styles.noUnderline)
                  setShowDes(false);
                }}>
                More like this
              </h2>
            </div>
            <hr></hr>
            <div id={styles.DescriptionDetail}>
              {showDes
              ?
                <ul>
                  <li>Good quality and never fade away</li>
                  <li>Good quality and never fade away</li>
                  <li>Good quality and never fade away</li>
                  <li>Good quality and never fade away</li>
                  <li>Good quality and never fade away</li>
                </ul>
              :
              <div id={styles.moreLikeThisDiv}>
                <img src={img1} alt="" className={styles.exampleImg1} />
                <img src={img2} alt="" className={styles.exampleImg2}/>
                <img src={img3} alt="" className={styles.exampleImg3}/>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ProductPage
