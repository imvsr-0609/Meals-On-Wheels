import React from 'react'
import './CheckOutComponent.css'

const CheckOutComponent = () => {
    return (
        <div className='checkout-component'>

        <div className='checkout-component-left'>
        
        <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" alt="food" />
        <div className='checkout-item-details'>
        
        <p>Chicken biriyani</p>
        <p>10 $</p>
        <p>Delicious biriyani with raita and salads</p>
        
        </div>
        
        
        </div>
        <div className='checkout-component-right'>
        <button>-</button>
        <p>5</p>
        <button>+</button>
        
        </div>
     
        </div>
    )
}

export default CheckOutComponent
