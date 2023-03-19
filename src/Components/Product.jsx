import React from 'react'
import Nav from './Nav'
import {useState,useEffect} from 'react'
import ProductDetail from './ProductDetail';
function Product() {
    // onch5ck of product user should come on this page .
    // oneSide caagories and one side details of produt.
    //left side catagories and right side titles from API
    //APi-https://fakestoreapi.com/products/categories
    //onch5ck on any on left at right side display things.
 const [TitleData,setTitleData]=useState([]);
 const[InputValue,setInputValue]=useState('electronics');

 useEffect(() => {
  fetch(` https://fakestoreapi.com/products/category/${InputValue}`)
 .then(resp=>resp.json())
 .then (data=>setTitleData(data));
console.log(TitleData);


 },[InputValue,TitleData])
 console.log(InputValue)


  return (
    <div className='MainProductdiv'>
       <div><Nav></Nav></div> 
       
       <div className='Productdiv'>
        <div className='left-div-of-product '>
            <button className='prodbutton' value={"electronics"} onClick={(e)=>setInputValue(e.target.value)}>Electronics</button>
            <button  className='prodbutton' value={"jewelery"} onClick={(e)=>setInputValue(e.target.value)}>Jwelleries</button>
            <button className='prodbutton' value={"men's clothing"} onClick={(e)=>setInputValue(e.target.value)}>Men's Clothing</button>
            <button className='prodbutton' value={"women's clothing"} onClick={(e)=>setInputValue(e.target.value)}>Womens Clothing</button>
        </div>
        <div className='right-div-of-product'>
            <ul>
              {
                TitleData.map((elem,idx)=>{
                  return(
                    <div key={idx}>
                    <h5>{elem.title}</h5>
                    </div>
                  )
               
                  
                })
              }
                {/* <h5>dda</h5>
                <h5>asdfasdfa</h5>
                <h5>sadfsafa</h5>
                <h5>fdafaa</h5>
                <h5>aasdas</h5>
                <h5>fdafdaf</h5> */}
            </ul>
        </div>
       </div>
        <ProductDetail data={TitleData} />
    </div>
  )
};


export default Product