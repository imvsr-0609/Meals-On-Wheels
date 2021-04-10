import React from 'react'
import './Menu.css'
import menuData from './data.js'
import SingleMenu from './SingleMenu'

const MenuCard = ({closetoggleMenu}) => {
    console.log(menuData)
    return (
        <div className='menu-div'>
            <div className='menu-card'>
            <div className="menu-header">
            <h4>Our Menu</h4>
            <button className='menu-close-btn' onClick={closetoggleMenu}>X</button>
            </div>
            {menuData?.map((menu)=>(
                <SingleMenu name={menu?.name} image={menu?.image} description={menu?.description} price={menu?.price} />
            ))}
            
            </div>
            
        </div>
    )
}

export default MenuCard
