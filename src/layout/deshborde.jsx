import React, { useContext } from 'react'
import { AuthContext } from '../context/authProvider'
import { NavLink, Outlet } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Deshborde = () => {
    const {user}=useContext(AuthContext);
  return (
    <div className='flex bg-gray-800 text-white'>
        <div className='bg-green-400 min-h-screen'>
            {
               user? <ul>
                <li ><NavLink to="/dashboard/userprofile" className='flex text-black items-center p-2 rounded-xl m-4'><FaUser></FaUser> My Profile</NavLink></li>                     
                <li ><NavLink to="/" className='flex text-black  items-center p-2 rounded-xl m-4'> My Bookings</NavLink></li>                
                <li ><NavLink to="/" className='flex text-black  items-center p-2 rounded-xl m-4'> My WishList</NavLink></li>                
                <li ><NavLink to="/" className='flex text-black items-center p-2 rounded-xl m-4'> Request to Admin</NavLink></li>                
                
      
            </ul>:<></>
            }
        </div>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Deshborde
