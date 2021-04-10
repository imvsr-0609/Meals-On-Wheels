import React from 'react'
import './HomePageBody.css'
import Restaurant from '../Restaurant/Restaurant'
import restaurantData from './RestaurantData'

const HomePageBody = ({toggleMenu}) => {
    return (
        <div className='homepage-body'>
        <h1>25 Restaurants in your area</h1>
        <div className='restaurant-component'>
        <Restaurant toggleMenufirst={toggleMenu}/>
        <Restaurant toggleMenufirst={toggleMenu}/>
        <Restaurant toggleMenufirst={toggleMenu}/>
        <Restaurant toggleMenufirst={toggleMenu}/>
        <Restaurant toggleMenufirst={toggleMenu}/>
        <Restaurant toggleMenufirst={toggleMenu}/>
    
        </div>
            
        </div>
    )
}

export default HomePageBody
