import React , {useEffect , useState , useContext} from 'react'
import { UserContext } from '../../context/UserProvider'
import './HomePage.css'
import { Redirect } from "react-router-dom";
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';
import HomePageTop from '../../components/HomePageTop/HomePageTop';
import HomePageBody from '../../components/HomePageBody/HomePageBody';


function HomePage() {

const {user , logout} = useContext(UserContext)

const[redirect, setRedirect]=useState(null)

useEffect(()=>{

if(!user){
    setRedirect('/') 
     
}

},[user])

if(redirect){
    return <Redirect to={redirect} />
}

console.log(user)

console.log(redirect)




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
