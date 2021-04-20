import React , {useEffect , useState , useContext} from 'react'
import { UserContext } from '../../context/UserProvider'
import './HomePage.css'
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';
import HomePageTop from '../../components/HomePageTop/HomePageTop';
import HomePageBody from '../../components/HomePageBody/HomePageBody';
import { Menu } from '@material-ui/core';
import MenuCard from '../../components/MenuComponent/Menu';



function HomePage() {

    const [showMenu ,setShowMenu] = useState(false)

    const toggleMenu =()=>{
         setShowMenu(true)
      
    }
    const closetoggleMenu =()=>{
        
        setShowMenu(false)
       
    }

    return (
        <div className='homepage'>
           <NavBar active={"home"}/>
           {showMenu && <MenuCard closetoggleMenu = {closetoggleMenu}/>}
           <HomePageTop/>
           <HomePageBody toggleMenu={toggleMenu}/>
           <Footer/>
        </div>
    )
}

export default HomePage