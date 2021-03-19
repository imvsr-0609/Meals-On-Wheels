import React,{useState,useEffect} from 'react'
import './HomePageTop.css'
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import useLocation from '../customHooks/useLocation';

const HomePageTop = () => {
    const {position , error} = useLocation()
    const[input ,setInput]= useState("")
   useEffect(()=>{
       console.log(input)
   },[input])
   console.log(position)
    return (
        <div className="homepage-top">
        <h1>Meals On Wheels</h1>
        <h3><span>Hungry ?</span> You're in the right place.</h3>
        <div className='search'>
        <div className='user-location'>
        <RoomIcon/>
        <p>New Delhi</p>        
        </div>
        <div className='search-input'>
         <SearchIcon/>
        <input type="search" placeholder="Search for restaurant , cuisine or dish"
        value={input}
        onChange={e=>{
            setInput(e.target.value)
        }}/>
        
        </div>
        
        </div>
        </div>
    )
}

export default HomePageTop
