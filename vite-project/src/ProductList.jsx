import React, { useEffect, useState } from 'react'
import { useCart } from './CartContext'
import Cart from './Cart'
import './Product.css'

const ProductList = () => {
    const [products,setProducts]=useState([])
    const {cart,addToCart}=useCart()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
        
    },[])
  return (
    <div>
        <div className='grid'>
        {
        products.map((product,key)=>{
        return(
            <div key={product.id} >
                <img src={product.image} width="100px"></img>
                <p>{product.title}</p>
                <p>{product.price}</p>
                <button onClick={()=>addToCart(product)}>AddToCart</button>
                </div>
            
        )
      })
    }
    </div>
    <hr/>
    <Cart/>
    </div>
  )
}

export default ProductList
