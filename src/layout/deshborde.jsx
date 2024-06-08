import React, { useContext } from 'react'
import { AuthContext } from '../context/authProvider'
import { NavLink, Outlet } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';
import useRoleGuide from '../hooks/useRoleGuide';

const Deshborde = () => {
  
    const {user,loading}=useContext(AuthContext);
    const [isguide,isguideLoading]=useRoleGuide();
    const [isAdmin,isAdminLoading]=useAdmin()
    console.log(isAdmin,isguide);
    if(isguideLoading || isAdminLoading || loading){
      return <p>Loading.....</p>
    }
  return (
    <div className='flex bg-gray-600 text-white'>
        <div className='bg-gray-800 min-h-screen text-white'>
            {
               user && !isAdmin && !isguide ? <ul>
                <li ><NavLink to="/dashboard/userprofile" className='flex   items-center p-2 rounded-xl m-4'><FaUser></FaUser> My Profile</NavLink></li>                     
                <li ><NavLink to="/dashboard/mybooking" className='flex  items-center p-2 rounded-xl m-4'> My Bookings</NavLink></li>                
                <li ><NavLink to="/dashboard/wishlist" className='flex  items-center p-2 rounded-xl m-4'> My WishList</NavLink></li>                
                <li ><NavLink to="/dashboard/reqForAdmin" className='flex items-center p-2 rounded-xl m-4'> Request to Admin</NavLink></li>                
                
      
            </ul>:<></>
            }
            {
              user && !isAdmin && isguide?<ul>
                <li ><NavLink to="/dashboard/guideprofile" className='flex   items-center p-2 rounded-xl m-4'><FaUser></FaUser> My Profile</NavLink></li>                     
                <li ><NavLink to="/dashboard/guideToures" className='flex  items-center p-2 rounded-xl m-4'> My Bookings</NavLink></li>                
              </ul>:<></>
            }
            {
              user && isAdmin && !isguide?<ul>
              <li ><NavLink to="/dashboard/adminprofile" className='flex   items-center p-2 rounded-xl m-4'><FaUser></FaUser> My Profile</NavLink></li>                     
              <li ><NavLink to="/" className='flex   items-center p-2 rounded-xl m-4'><FaUser></FaUser> Add Package </NavLink></li>                     
              <li ><NavLink to="/" className='flex   items-center p-2 rounded-xl m-4'><FaUser></FaUser> Manage users </NavLink></li>                     
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
