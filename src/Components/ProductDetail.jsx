import React from 'react'
// import Nav from './Nav'

function ProductDetail(props) {
  //Detail information About products 
    console.log(props)
  return (
    <div >
             {/* <Nav></Nav> */}
             
        {
                props.data.map((elem,idx)=>{
                  return(
                    <>
                  { props.data.length-6===idx && <h2 style={{background:'rgb(108, 236, 23)'}}>{elem.category} Category</h2>}
                    <div className="productdetailmain">
                    <div>
                        <img className="productDeatilsimg"src={elem.image} alt="" />
                    </div>
                    <div className='rightproductdetail'>
                       <span >Product Name
                        <p style={{color:'GrayText'}}>{elem.title}</p></span> 
                        <span>  Product Price
                        <p style={{color:'GrayText'}}>{elem.price}</p></span>
                       <span>Product description
                        <p style={{color:'GrayText'}}>{elem.description}</p></span>
                         <span> Product Rating
                        <p style={{color:'GrayText'}}>{elem.rating.rate}</p></span>
                    </div>

                    </div>
                    

                  
                    </>
                  )
               
                  
                })
              }
    </div>
  )
}

export default ProductDetail