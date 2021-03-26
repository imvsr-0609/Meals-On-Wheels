import GalleryComponent from '../../components/Gallery/GalleryComponent'
import NavBar from '../../components/Navbar/NavBar'
import './GalleryPage.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from '../../components/Footer/Footer';
import React  from 'react'


const GalleryPage = () => {



    return (
        <div className='gallery-page'>
        <NavBar active={"gallery"}/>
        <div className='gallery-page-top'>
            <h1>Our <span>Gallery</span></h1>
            <ExpandMoreIcon  style={{ fontSize: 50}} />
        </div>

        <div className="gallery-body">
        
        <GalleryComponent/>
        
        </div>
        
        

        <Footer/>
        
        </div>
    )
}

export default GalleryPage
