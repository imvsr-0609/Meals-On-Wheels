import React , {useEffect , useState , useContext} from 'react'
import { UserContext } from '../../context/UserProvider'
import './HomePage.css'
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';
import HomePageTop from '../../components/HomePageTop/HomePageTop';
import HomePageBody from '../../components/HomePageBody/HomePageBody';
import { client } from '../../zomato';


function HomePage() {

//     useEffect(()=>{
//         client.getCollections({city_id: 256})
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
//     },[])

    return (
        <div className='homepage'>
           <NavBar active={"home"}/>
           <HomePageTop/>
           <HomePageBody/>
           <Footer/>
        </div>
    )
}

export default HomePage
