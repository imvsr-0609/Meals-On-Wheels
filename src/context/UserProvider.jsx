import React, {useState , useEffect , createContext} from 'react'
import {auth,provider} from '../firebase'

export const UserContext = createContext()

function UserProvider(props) {

  const getUser = ()=>{
    const data = localStorage.getItem('user')
    if(data){
      return JSON.parse(data)
    }
    else{
      return null
    }
  }

    const [user, setUser] = useState(getUser)
    const [loadingUser,setLoadingUser]= useState(true)

    const signInWithGoogle = ()=>{

        auth.signInWithPopup(provider).then((res)=>{
          console.log(res.user)
        })
        .catch(error =>{
          console.log(error.message)
        })
      
      }
      const logout = ()=>{
        auth.signOut().then(()=>{
          console.log('loggedOut')
          setUser(null)
          sessionStorage.clear()
        })
        .catch(error =>{
          console.log(error.message)
        })
      }

    useEffect(()=>{
    auth.onAuthStateChanged(async(user)=>{
        await setUser({
            displayName: user?.displayName,
            email:user?.email,
            id:user?.uid,
            picture:user?.photoURL
        })
        localStorage.setItem('user' , JSON.stringify(user))
        setLoadingUser(false)
    })


    },[])

    return(
        <UserContext.Provider value={{user, signInWithGoogle , logout,loadingUser}}>{props.children}</UserContext.Provider>
    )
    
}

export default UserProvider
