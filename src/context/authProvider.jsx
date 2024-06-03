import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const createUser=(email,password)=>{
        // use firebase build in functions
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        // when user is createing loading should be true 
      }


      useEffect(()=>{
        // obgarber for user and whice user is use this 
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
          // get currentUser in user state
          setUser(currentUser);
          console.log("Inside the useEffect", currentUser);
          // when user is loaded then loding is false
          setLoading(false);
        })
        // returning the user as unsubscribe
        return ()=>{
          unsubscribe();
        }
      },[]);
    const authInfo={user,setUser,loading,setLoading,createUser}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
