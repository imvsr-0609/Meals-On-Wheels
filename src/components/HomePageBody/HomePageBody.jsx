import React from 'react'
import './HomePageBody.css'
import Restaurant from '../Restaurant/Restaurant'

const HomePageBody = () => {
    return (
        <div className='homepage-body'>
        <h1>25 Restaurants in your area</h1>
        <div className='restaurant-component'>
        <Restaurant/>
        <Restaurant/>
        <Restaurant/>
        <Restaurant/>
        <Restaurant/>
        <Restaurant/>
        </div>
            
        </div>
    )
}

export default HomePageBody
