import React, { useContext } from 'react'
import {  Link, NavLink } from 'react-router-dom';
import "./style.css"
import { AuthContext } from '../context/authProvider';
const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);

  const handleCurrentUserLogOut = () => {
    logOut();
  };

    const links = (
        <>
         <li ><NavLink to="/">Home</NavLink></li>
         <li ><NavLink to="/community">Community</NavLink></li>
         <li ><NavLink to="/blogs">Blogs</NavLink></li>
         <li ><NavLink to="/aboutsus">Abouts us</NavLink></li>
         <li ><NavLink to="/contactus">contact us</NavLink></li>
         
        </>
      );
      const loginRegister = (
        <>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      );
  return (
    <div className="navbar border-b-2 border-sky-400  rounded-b-md">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className='btn btn-ghost'><span className='font-mono md:text-3xl'>Life On</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  {user ? (
        <ul className="menu menu-horizontal px-1 navbar-end">
          
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="m-1"><img className=" w-12 rounded-full" src={user.photoURL} alt="User Profile" /></div>
            <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52"> 
              <Link><button className='btn w-full' disabled>{user.displayName}</button></Link>
              <Link><button className='btn w-full' disabled>{user.email}</button></Link>
              <Link><button className='btn w-full'>Dashbored</button></Link>
            </ul>
          </div>
          <li>
            <NavLink to="/logout" onClick={handleCurrentUserLogOut}>
              Log out
            </NavLink>
          </li>
          {/* <p>{user.displayName}</p> */}
        </ul>
      ) : (
        <ul className="menu menu-horizontal px-1 navbar-end">
          {loginRegister}
        </ul>
      )}
</div>
  )
}

export default Navbar
