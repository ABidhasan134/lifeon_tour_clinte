import React, { useContext } from 'react'
import { AuthContext } from '../context/authProvider'
import { NavLink, Outlet } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Deshborde = () => {
    const {user}=useContext(AuthContext);
  return (
    <div className='flex bg-gray-600 text-white'>
        <div className='bg-gray-800 min-h-screen text-white'>
            {
               user? <ul>
                <li ><NavLink to="/dashboard/userprofile" className='flex   items-center p-2 rounded-xl m-4'><FaUser></FaUser> My Profile</NavLink></li>                     
                <li ><NavLink to="/dashboard/mybooking" className='flex  items-center p-2 rounded-xl m-4'> My Bookings</NavLink></li>                
                <li ><NavLink to="/" className='flex  items-center p-2 rounded-xl m-4'> My WishList</NavLink></li>                
                <li ><NavLink to="/" className='flex items-center p-2 rounded-xl m-4'> Request to Admin</NavLink></li>                
                
      
            </ul>:<></>
            }
        </div>
        <div className='flex-1 p-6'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Deshborde
