import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from "../context/authProvider";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import useAxiousPublic from "../hooks/useAxiousPublic";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../firebase/firebase";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, setLoading, setUser } = useContext(AuthContext);
  const [seePass, setSeePassword] = useState(false);
  const axiousPublic = useAxiousPublic();
  const provider = new GoogleAuthProvider();

  const validatePassword = (password) => {
    if (password.length < 6) {
      toast("Your password must be at least 6 characters");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      toast("Your password must have one uppercase letter");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      toast("Your password must have one lowercase letter");
      return false;
    }
    return true;
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    const userPhotoUrl = e.target.url.value;

    if (!validatePassword(userPassword)) return;

    createUser(userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: userName,
          photoURL: userPhotoUrl,
        })
        .then(() => {
          toast("User created successfully");
          setUser({ displayName: userName, photoURL: userPhotoUrl });
          const userInfo = { user_name: userName, user_email: userEmail, role: 'user' };
          axiousPublic.put(`/users/${userEmail}`, userInfo)
            .then((res) => {
              console.log(res.data);
            });
          setLoading(true);
          e.target.reset();
          navigate("/successregester");
        })
        .catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        console.log(error.message);
        toast("You already have an account, please log in");
      });
  };

  const handleGoogleSubmit = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
        toast("Registered successfully with Google");
        setUser({ displayName: user.displayName, photoURL: user.photoURL });
        const userInfo = { user_name: user.displayName, user_email: user.email, role: 'user' };
        axiousPublic.put(`/users/${user.email}`, userInfo)
          .then((res) => {
            console.log(res.data);
          });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="hero ">
        <div className="hero-content flex-col lg:w-2/3 w-full ">
          <h1 className="lg:text-5xl text-3xl font-bold ">Register</h1>
          <div className="card shrink-0 w-full max-w-full shadow-2xl bg-gray-100">
            <form className="card-body" onSubmit={handleRegisterSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Add photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="URL"
                  className="input input-bordered"
                  name="url"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div>
                  <input 
                    type={seePass ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered w-full"
                    name="password"
                    required
                  />
                  <span className="absolute right-12 mt-2 sm:text-3xl text-2xl hover:cursor-pointer" onClick={() => setSeePassword(!seePass)}>
                    {seePass ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-sky-400 hover:bg-sky-700 hover:text-white">Register</button>
              </div>
            </form>
            <div className="flex justify-center">
              <button className="my-2 btn bg-transparent bottom-2 border-green-800 w-[80%] sm:w-[90%] ml-2 mr-2 hover:bg-green-800 hover:text-white" onClick={handleGoogleSubmit}>
                <span className="text-2xl"><FaGoogle /></span>Google Login
              </button>
            </div>
            <ToastContainer />
            <div className="flex justify-center mb-6 text-xl">
              <p>If you already have an account, please </p>
              <Link to="/login" className="ml-1 text-blue-500 underline">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
