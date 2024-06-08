import React, { useContext } from 'react'
import useAdmin from '../hooks/useAdmin';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authProvider';


const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isAdmin,isAdminLoading]=useAdmin();
    const location =useLocation();

    if (loading || isAdminLoading) {
      return <span className="loading loading-spinner loading-lg"></span>;
    }
  
    if (user && isAdmin) {
      return children;
    }
  
    return <Navigate state={location.pathname} to="/login"/>;
}

export default AdminRoute
