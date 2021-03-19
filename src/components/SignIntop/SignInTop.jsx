import React ,{useState , useEffect , useContext} from 'react'
import './SignInTop.css'
import logo from '../../assets/image/mow-logo.jpg'
import Typewriter from 'typewriter-effect'
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider'

function SignInTop() {

  const {user,signInWithGoogle } = useContext(UserContext)
  const [redirect , setRedirect] = useState(null)

  useEffect(()=>{
      if(user?.email){
          setRedirect('/home')
          console.log(user)
      }
      

  }, [user])

  if(redirect){
      return <Redirect to={redirect} />
  }

    return (
        <div className='sign-in-top'>
    
         <nav className='logo-nav'>
         
            <img src={logo}  alt='meals-on-wheels'/>
            
            <h1>Meals On Wheels</h1>

         </nav>

         <div className='sign-in-body'>
         
            <div className='sign-in'>

                <div className='typewriter'>
                
                    <Typewriter

                    options={
                    {
                        autoStart: true,
                        loop: true
                    }

                    }
                    
                    onInit={(typewriter) =>{
                        typewriter.typeString("We get what you Love")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Order Food Delivery")
                        .pauseFor(2000)
                        .deleteAll()
                        .start()
                    }}
                    
                    />
                
                </div>

                <h4>From Your Favourite Restaurant .</h4>
                <button onClick={signInWithGoogle}>sign in with google</button>
            
            </div>
         
         </div>

        </div>
            
    
    )
}

export default SignInTop
