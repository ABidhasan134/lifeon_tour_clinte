import React, { useContext, useState} from "react";

import { AuthContext } from "../context/authProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { FacebookAuthProvider, GithubAuthProvider,GoogleAuthProvider,signInWithPopup } from "firebase/auth";

import { FaFacebook, FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../firebase/firebase";
import useAxiousPublic from "../hooks/useAxiousPublic";



const LogIn = () => {
  const { logInuser } = useContext(AuthContext);
  const gitHubProvider = new GithubAuthProvider();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [seePass, setSeePassword]=useState(false);
  const logLocation=useLocation()
  const FacebookProvider = new FacebookAuthProvider();
  // console.log(logLocation);
  const axiousPublic=useAxiousPublic();

  // from submit function
  const handelLogInSubmit = (e) => {
    e.preventDefault();
    const logEmail = e.target.email.value;
    const logPassword = e.target.password.value;
    // console.log(logEmail,logPassword);
    logInuser(logEmail, logPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        toast("Login successful")
        // ...
        // navigate("/");
        setTimeout(() => {
          navigate(logLocation?.state?logLocation.state:"/");
        }, 3000);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);
        toast("you don't have an account");
        
      });
      e.target.reset();
  };
  
  //add scope of github
  gitHubProvider.addScope('user:email'); 

  // GitHub login function 
  const handleGithubLogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        const additionalUserInfo = result.additionalUserInfo;
        let email = user.email;

        // Check if email is available in the user object
        if (!email && additionalUserInfo) {
          const profile = additionalUserInfo.profile;
          if (profile && profile.email) {
            email = profile.email;
          }
        }

        const userInfo = { user_name: user.displayName, user_email: email || "example@gmail.com", role: 'user' };

        toast("Login successful with GitHub");
        axiousPublic.put(`/guides/${email}`, userInfo)
          .then((res) => {
            console.log(res.data);
          });
        setTimeout(() => {
          navigate(logLocation?.state ? logLocation.state : "/");
        }, 3000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast("GitHub login failed: " + errorMessage);
      });
  };

  // google login function
  const handelGoogleSubmit = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // setPerson(user);
        toast("Login successful with Google");
        console.log(user);
        const userInfo = { user_name: user.displayName, user_email: user.email, role: 'user' };
        axiousPublic.put(`/guides/${user.email}`, userInfo)
          .then((res) => {
            console.log(res.data);
          });
        setTimeout(() => {
          navigate(logLocation?.state?logLocation.state:"/");
        }, 3000);
      })
      .catch((error) => console.log("error", error.message));
  };
  const handelFaceBookLogIn=()=>{
    signInWithPopup(auth,FacebookProvider)
    .then((result) => {
      const user = result.user;
      // setPerson(user);
      toast("Login successful with Facebook");
      // console.log(user);
      setTimeout(() => {
        navigate(logLocation?.state?logLocation.state:"/");
      }, 3000);
    })
    .catch((error) => console.log("error", error.message));
  }
  return (
    <div className="container mx-auto">
    

        <div className="hero bg-sky-50 h-[80vh]">
          <div className="hero-content flex-col lg:w-2/3 w-full">
            <h1 className="text-3xl font-bold">Login now!</h1>
            <div className="card shrink-0 w-full max-w-full shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handelLogInSubmit}>
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                   type={seePass?"text":"password"}
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <span className="absolute right-12 mt-12 sm:text-3xl text-2xl hover:cursor-pointer " onClick={()=>setSeePassword(!seePass)}>{seePass?<FaRegEyeSlash></FaRegEyeSlash>:<FaRegEye></FaRegEye>}</span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-sky-400 hover:bg-sky-700 hover:text-white">Login</button>
                </div>
              </form>
  
                  <ToastContainer></ToastContainer>
              <div>
                <div className="flex w-full  p-6 gap-5">
                  <button className="my-2 btn btn-outline w-[45%] sm:w-[48%] ml-2 mr-2" onClick={handleGithubLogin}>
                    <span className="text-2xl"><FaGithub></FaGithub></span>git Hub logIn</button>
                  <button className="my-2 btn bg-transparent bottom-2 border-green-800 w-[45%] sm:w-[48%] ml-2 mr-2 hover:bg-green-800 hover:text-white" onClick={handelGoogleSubmit}>
                  <span className="text-2xl"><FaGoogle></FaGoogle></span>Google log in</button>
                </div>
              </div>
              <button className="my-2 btn bg-transparent bottom-2 border-green-800 w-[45%] sm:w-[99%] ml-2 mr-2 hover:bg-green-800 hover:text-white" onClick={handelFaceBookLogIn}>
                  <span className="text-2xl"><FaFacebook></FaFacebook></span>Facebook log in </button>
              <div className="flex justify-center mb-6 text-xl">
                <p>If you don't have account. please </p>
                <Link to="/register" className="ml-1 text-blue-500 underline">
                  Sing In
                </Link>
              </div>

            </div>
          </div>
        </div>
    </div>
  );
};

export default LogIn;
