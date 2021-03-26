import React from 'react'
import {useHistory } from 'react-router-dom'
import CartItems from '../CartItems/cartItems'
import './Cart.css'


const Cart = () => {
    const history=useHistory()
    return (
        <div className='cart'>
        <div className='cart-component'>
        <CartItems/>
        <CartItems/>
        <CartItems/>
     
       
        </div>
        <button className='checkout-btn' onClick={e=> history.push("/checkout")}>go to checkout</button>
            
        </div>
    )
}

export default Cart
