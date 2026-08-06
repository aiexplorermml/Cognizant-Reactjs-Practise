import React from 'react'
import { useCart } from './CartContext'

const Cart = () => {
  const {cart} =useCart()
  return (
    <div>
    This is Cart <br /> 
<h2>Number of items {cart.length}</h2>
    <div>
      {
  cart.map((product)=>{
    return(
      <>
      <img src={product.image} alt="" width="100px" />
      <p>{product.price}</p>
      <p>{product.title}</p>
      </>
    )
  })
}
    </div>


    </div>
  )
}

export default Cart