
import React, { useState } from 'react';
import Product_Detail from './Product_Detail';
import {BsCartCheckFill} from 'react-icons/bs';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import { IoCloseCircleSharp } from "react-icons/io5";
import '../styles/Product.css'
const Product = () => {
    const [product,setProduct]=useState(Product_Detail)
  
    const [detail,setDetail]=useState([])
    const view =(product)=>{
      setDetail([{...product}])
      setClose(true)
    }

const[close,setClose]=useState(false);

  return (
    <>{
      close?<div className='product_detail'>
  <div className='container'>
  <button className='closebtn' onClick={()=>setClose(false)}><IoCloseCircleSharp /></button>
  {
    detail.map((e)=>{
      return(
        <div className='productbox'>
          <div className='img-box'>
              <img src={e.img} alt={e.Title} />
          </div>

          <div className='detail'>
              <h4>{e.Cat}</h4>
              <h2>{e.Title}</h2>
              <p>Module build failed (from ./node_modules/babel-loader/lib/index.js):</p>
              <h3>{e.Price}</h3>
              <button>Add to Cart</button>
          </div>
        </div>
      )
    })
  }
    <div className='productbox'>

    </div>
  </div>
</div> :null
    }

<div className='products'>

    <div className='container'>
        <div className='filter'>
            <div className='categories'>
            <h3>Categories</h3>
                <ul>
                     <li className='first'>All Product</li>
                    <li >Tablet</li>
                    <li >Smartphone</li>
                    <li >Smartwatch</li>
                    <li >shoes</li>
                    <li >Clothes</li>
                    <li >camera</li>
                </ul>
            </div>
        </div>

        <div className='productbox'>
            <div className='container'>
                {
                    product.map((e)=>
                    {
                        return(
                        <>
                        <div className='box' key={e.id}>
              <div className='img_box'>
                <img src={e.img} alt={e.Title}></img>
              <div className='icon'>
                <li >   <BsCartCheckFill /> </li>
                <li onClick={()=>view(e)}> <AiOutlineEye /></li>
                <li> <AiOutlineHeart /></li>             
               </div>
               </div>
              <div className='detail'>
                <p>{e.Cat}</p>
                <h3>{e.Title}</h3>
                <h4>{e.price}</h4>
              </div>
            </div>  
                         </>
                        )
                  }  )
                }
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Product