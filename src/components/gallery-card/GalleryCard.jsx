import React from 'react'
import './GalleryCard.css'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const GalleryCard = ({src,largeImgUrl,favourites ,likes}) => {
    return (
        <div className='gallery-card'>
            
        <img src={src} alt="food"></img>
        <div className='card-bottom'>
        
        <div className='likes'>
        <div><FavoriteBorderOutlinedIcon style={{fontSize: 20}} /><p>{favourites}</p> </div>
        
        <div className='like-btn'><ThumbUpAltOutlinedIcon style={{fontSize: 20}} /><p>{likes}</p></div>
        
        </div>

        <div className='download'>
        <a href={largeImgUrl} target="blank"> <GetAppRoundedIcon/></a>
        </div>
        
        
        </div>

        </div>
    )
}

export default GalleryCard
