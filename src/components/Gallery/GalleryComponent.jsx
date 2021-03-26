import React, {useState , useEffect} from 'react'
import GalleryCard from '../gallery-card/GalleryCard'
import './GalleryComponent.css'
import uuid from 'react-uuid'
import Loader from '../Loader/Loader'

const GalleryComponent = () => {

   const [images , setImages] = useState(null)
   const [loading , setLoading] = useState(true)

   const url ="https://pixabay.com/api/?key=19611946-c2cb3481fa1e0f180b3a23215&q=dish&image_type=photo&pretty=true&per_page=200"

  

   useEffect(()=>{
    const fetchdata = async()=>{
        try{
            fetch(url)
            .then(res=>res.json())
            .then(images =>setImages(images))
            
     
            setLoading(false)
        }
        catch(error){
           console.log(error.message)
        }
      
   }
       fetchdata()
   },[])

   console.log(images)

    return (
        <div className='gallery-component'>
        { loading ? <div className='gallery-loader'><Loader/></div>  :   
        <div className='gallery-body'>
        {images?.hits.map(image => {
          return(
              <GalleryCard key={uuid()} src={image.webformatURL} largeImgUrl ={image.largeImageURL} favourites={image.favorites} likes={image.likes}/>
          )

        })}
           
        
        </div> }
      
        </div>
    )
}

export default GalleryComponent
