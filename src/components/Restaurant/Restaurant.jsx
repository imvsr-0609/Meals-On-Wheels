import React from 'react'
import './Restaurant.css'

const Restaurant = () => {
    return (
        <div className='restaurant-card'>
            <img src="https://i.pinimg.com/564x/62/5f/a0/625fa02b69d10ee443145b7ca51082c1.jpg" alt="restaurant" />
            <div className='restaurant-details'>
            <h2>Chinese Corner</h2>
            <p>Chinese , Fastfood , snacks</p>
            
            <div className='restaurant-specs'>
            <p>4.2</p>
            <p>·</p>
            <p>32 MINS</p>
            <p>·</p>
            <p>250 FOR TWO</p>
            </div>
            
            </div>
        </div>
    )
}

export default Restaurant
