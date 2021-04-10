import React from 'react'

const SingleMenu = ({name , description , image , price}) => {
    return (
        <div className='single-menu'>
            <div className='menu-left'>
                <div className='menu-img'>
                    <img src={image} alt="Menu" />
                </div>
                <div className='menu-details'>
                
                <h3>{name}</h3>
                <p>₹ {price}</p>
                <p>{description}</p>
                
                </div>
            </div>
            <button>Add to Cart</button>
        </div>
    )
}

export default SingleMenu
