import React,{useState,useEffect} from 'react'
import './HomePageTop.css'
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import useLocation from '../customHooks/useLocation';

const HomePageTop = () => {
    const {position,placeloading} = useLocation()
    const[input ,setInput]= useState("")
    const[city,setCity]=useState("")
    const[loading,setLoading] = useState(true)

  
    const fetchCity = async()=>{
        try{
            if(position || !placeloading){
                await fetch(`https://api.opencagedata.com/geocode/v1/json?key=4ccd7a3b2350430e938787d3edde7468&q=${position.latitude}%2C${position.longitude}&pretty=1`)
                .then(res=>res.json())
                .then(data=>setCity(data?.results[0]?.components?.state_district))
                setLoading(false)
                
            }
           
        }
        catch(err){
            console.log(err)
        }
    }

//    useEffect(()=>{
//     fetchCity()
//    },[])



    return (
        <div className="homepage-top">
        <h1>Meals On Wheels</h1>
        <h3><span>Hungry ?</span> You're in the right place.</h3>
        <div className='search'>
        <div className='user-location'>
        <RoomIcon/>
        {loading ? <p>loading..</p> : <p>{city}</p>   }
             
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
