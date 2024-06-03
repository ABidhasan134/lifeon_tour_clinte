
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { AuthContext } from "../context/authProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const navigate=useNavigate()
  const {createUser,setLoading,setUser}=useContext(AuthContext);
  const [error,setError]=useState()
  const [seePass, setSeePassword]=useState(false)
  // const naviget=useNavigate();
  // console.log(creatUser);
  const handelregisterSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const useremail = e.target.email.value;
    const userpassword = e.target.password.value;
    const userphotoUrl = e.target.url.value;
    // console.log(userName, userpassword, userphotoUrl, useremail);
    if(userpassword.length<6){
      toast("your password must be at least 6 characters")
      return;
    }
    if(!/[A-Z]/.test(userpassword)){
      toast("your password must have on upperCase letter")
      return;
    }
    if(!/[a-z]/.test(userpassword)){
      toast("your password must have on lowrCase letter")
      return;
    }
    createUser(useremail, userpassword)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // console.log(user)
        
        
        updateProfile(user, {
          displayName: userName,
          photoURL: userphotoUrl,
        })
        .then(() => {
          toast("user created successfully");
          setUser({displayName : userName, photoURL : userphotoUrl}) 
          // navigate("/")
        })
        .catch((error) => {
          // An error occurred
          console.log(error)
          // ...
        });
        // logOut();
        setLoading(true);
        e.target.reset();
        navigate("/successregester")
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        
        console.log(errorMessage)
        toast(`Your already Have account please log in`);
      });
      
  };
  return (
    <div className="container mx-auto">
    
      
        <div className="hero ">
          <div className="hero-content flex-col lg:w-2/3 w-full ">
            <h1 className="lg:text-5xl text-3xl font-bold ">Register</h1>
  
            <div className="card shrink-0 w-full max-w-full shadow-2xl  bg-gray-100">
              <form className="card-body" onSubmit={handelregisterSubmit}>
                {/* name input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="your name"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* photo url */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Add photo url</span>
                  </label>
                  <input
                    type="url"
                    placeholder="url"
                    className="input input-bordered"
                    name="url"
                    required
                  />
                </div>
                {/* email Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                {/* password input */}
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div>
                  <input 
                    type={seePass?"text":"password"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    name="password"
                    required
                  />
                  
                  <span className="absolute right-12 mt-2 sm:text-3xl text-2xl hover:cursor-pointer " onClick={()=>setSeePassword(!seePass)}>{seePass?<FaRegEyeSlash></FaRegEyeSlash>:<FaRegEye></FaRegEye>}</span>
                  </div>
                </div>
                {/* log in btn */}
                <div className="form-control mt-6">
                  <button className="btn bg-sky-400 hover:bg-sky-700 hover:text-white">Login</button>
                </div>
              </form>
              <ToastContainer></ToastContainer>
              <div className="flex justify-center mb-6 text-xl">
                <p>If you have already an account. please </p>
                <Link to="/login" className="ml-1 text-blue-500 underline">
                  LogIn
                </Link>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default Register;
