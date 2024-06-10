import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import useAxiousPublic from '../hooks/useAxiousPublic'

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
  const axiousPublic=useAxiousPublic();
    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const createUser=(email,password)=>{
        // use firebase build in functions
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        // when user is createing loading should be true 
      }

      const logInuser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };
    
      const logOut = () => {
        setLoading(true);
        return signOut(auth).then(() => setLoading(false));
      };

      useEffect(()=>{
        // obgarber for user and whice user is use this 
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
          // get currentUser in user state
          setUser(currentUser);
          // console.log("Inside the useEffect", currentUser);
          if(currentUser){
            const userEamil={email: currentUser.email};
            axiousPublic.post('/jwt',userEamil)
            .then((res)=>{
              localStorage.setItem("access_token",res.data)
            })
          }
          else{
            localStorage.removeItem("access_token")
          }
          // when user is loaded then loding is false
          setLoading(false);
        })
        // returning the user as unsubscribe
        return ()=>{
          unsubscribe();
        }
      },[]);
    const authInfo={user,setUser,loading,setLoading,createUser,logInuser,logOut}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
