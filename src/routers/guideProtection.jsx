import React, { useContext } from 'react'
import useRoleGuide from '../hooks/useRoleGuide';
import { AuthContext } from '../context/authProvider';
import { Navigate, useLocation } from 'react-router-dom';

const GuideProtection = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isguide,isguideLoading]=useRoleGuide();
    const location =useLocation()

    if (loading || isguideLoading) {
      return <span className="loading loading-spinner loading-lg"></span>;
    }
  
    if (user && isguide) {
      return children;
    }
  
    return <Navigate state={location.pathname} to="/login" />;
}

export default GuideProtection
