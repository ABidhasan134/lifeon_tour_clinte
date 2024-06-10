import React, { useContext } from 'react'
import { AuthContext } from '../context/authProvider'
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';
import useRoleGuide from '../hooks/useRoleGuide';
import { MdManageAccounts } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { FaList } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";

const Deshborde = () => {
  
    const {user,loading}=useContext(AuthContext);
    const [isguide,isguideLoading]=useRoleGuide();
    const [isAdmin,isAdminLoading]=useAdmin()
    // console.log(isAdmin,isguide);

    if(isguideLoading || isAdminLoading || loading){
      return <div><span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span></div>
    }
  return (
    <div className='flex bg-gray-600 text-white'>
        <div className='bg-gray-800 min-h-screen text-white'>
            {
               user && !isAdmin && !isguide ? <ul>
                <li ><NavLink className='flex   items-center p-2 rounded-xl m-4' to="/"><FaHome></FaHome> Home</NavLink></li>
                <li ><NavLink to="/dashboard/userprofile" className='flex   items-center p-2 rounded-xl m-4'><FaUser></FaUser> My Profile</NavLink></li>                     
                <li ><NavLink to="/dashboard/mybooking" className='flex  items-center p-2 rounded-xl m-4'><TbBrandBooking></TbBrandBooking> My Bookings</NavLink></li>                
                <li ><NavLink to="/dashboard/wishlist" className='flex  items-center p-2 rounded-xl m-4'><FaList></FaList> My WishList</NavLink></li>                
                <li ><NavLink to="/dashboard/reqForAdmin" className='flex items-center p-2 rounded-xl m-4'><GrUserAdmin></GrUserAdmin> Request to Admin</NavLink></li>                
                
      
            </ul>:<></>
            }
            {
              user && !isAdmin && isguide?<ul>
                <li ><NavLink className='flex   items-center p-2 rounded-xl m-4' to="/"><FaHome></FaHome> Home</NavLink></li>
                <li ><NavLink to="/dashboard/guideprofile" className='flex   items-center p-2 rounded-xl m-4'><FaUser></FaUser> My Profile</NavLink></li>                     
                <li ><NavLink to="/dashboard/guideToures" className='flex  items-center p-2 rounded-xl m-4'><TbBrandBooking></TbBrandBooking> My Bookings</NavLink></li>                
              </ul>:<></>
            }
            {
              user && isAdmin && !isguide?<ul>
                <li ><NavLink className='flex   items-center p-2 rounded-xl m-4' to="/"><FaHome></FaHome> Home</NavLink></li>
              <li ><NavLink to="/dashboard/adminprofile" className='flex   items-center p-2 rounded-xl m-4'><FaUser></FaUser> My Profile</NavLink></li>                     
              <li ><NavLink to="/dashboard/addPackage" className='flex   items-center p-2 rounded-xl m-4'><IoMdAddCircle></IoMdAddCircle> Add Package </NavLink></li>                     
              <li ><NavLink to="/dashboard/manageUser" className='flex   items-center p-2 rounded-xl m-4'><MdManageAccounts></MdManageAccounts> Manage users </NavLink></li>                     
            </ul>:<></>
            }
        </div>
        <div className='flex-1 p-6 bg-gray-600'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Deshborde
