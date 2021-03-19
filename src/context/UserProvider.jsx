import React, {useState , useEffect , createContext} from 'react'
import {auth,provider} from '../firebase'

export const UserContext = createContext()

function UserProvider(props) {

    const [user, setUser] = useState(null)

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
        })
        .catch(error =>{
          console.log(error.message)
        })
      }

    useEffect(()=>{
    auth.onAuthStateChanged(async(user)=>{
        await setUser({
            displayName: user?.displayName,
            email:user?.email
        })
    })


    },[])

    return(
        <UserContext.Provider value={{user, signInWithGoogle , logout}}>{props.children}</UserContext.Provider>
    )
    
}

export default UserProvider