import {React,useEffect,useState} from 'react'
import { useLocation, useParams } from 'react-router-dom';
import img1 from "../../images/maleModel/model1.avif";
import img2 from "../../images/maleModel/model2.avif";
import img3 from "../../images/femaleModel/fmodel5.avif";
import img4 from "../../images/femaleModel/fmodel6.avif";
import women from '../../images/woman.png';
import bag from '../../images/bag.png';
import heart from '../../images/heart.png';
import './ProductPage.css';
import axios from 'axios';

const ProductPage = () => {
  const location=useLocation();

  const [showDes,setShowDes]=useState(true);
  const [cls1,setcls1]=useState('underline');
  const [cls2,setcls2]=useState('no-underline');
  const [mainImg,setMainImage]=useState(location.state.img);
  const [Img1,setImage1]=useState(img2);
  const [Img2,setImage2]=useState(img3);
  const [Img3,setImage3]=useState(img4);
  const [product,setProduct]=useState();

  let {productId}=useParams();

  
  useEffect(()=>{

    const fetchProduct=async ()=>{
      try{
        const response=await axios.get(`http://localhost:3001/${productId}`);
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
      const response=new axios.post(`http://localhost:3001/${productId}/addCart`);
      
    }catch(err){
      console.log(err);
    }
  }
  return product && (
    <div className="productPage">
      <div className='Logo-div'>
          <img src={women} alt='women'></img>
          <h2><span style={{color:'#FF0800'}}>E</span>-<span style={{color:'black'}}>Mart</span></h2>
      </div>
      <div id="product-mid-div">
        <div id="product-image-div">
          <img src={mainImg} alt="" id='main-image' />
          <div id="sample-div">
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
        <div id="product-detail-div">
          <div id="short-detail-div">
            <h1>{product.productName}</h1>
            <h3>{product.productPrice} ₹</h3>
          </div>
          <div id='color-div'>
            <h3>Color</h3>
            <button id='color-1'>red</button>
            <button id='color-2'>green</button>
            <button id='color-3'>blue</button>
          </div>
          <div id="size-div">
            <h3>Size</h3>
            <div id='size-btns'>
              <button>32</button>
              <button>33</button>
              <button>34</button>
              <button>35</button>
              <button>36</button>
              <button>37</button>
            </div>
          </div>
          <div id="product-add-div">
            <button id='add-btn' onClick={showMessage}>Add to Bag <img src={bag} /></button>
            <button id='fav-btn'>Fav<img src={heart}/></button> 
          </div>
          <div id="benefit-div">
            <h3>Free shipping </h3>
            <h3>25% off</h3>
          </div>
          <div id="Description-div">
            <div id="choose-div">
              <h2 className={cls1} 
                onClick={()=>{
                  setcls1('underline');setcls2('no-underline')
                  setShowDes(true);
                }}
              >
                Description
              </h2>
              <h2 className={cls2} 
                onClick={()=>{
                  setcls2('underline');setcls1('no-underline')
                  setShowDes(false);
                }}>
                More like this
              </h2>
            </div>
            <hr></hr>
            <div id="Description-detail">
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
              <div id='more-like-this-div'>
                <img src={img1} alt="" className='example-img1' />
                <img src={img2} alt="" className='example-img2'/>
                <img src={img3} alt="" className='example-img3'/>
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
