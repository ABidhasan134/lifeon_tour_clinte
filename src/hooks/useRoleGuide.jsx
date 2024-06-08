import React, { useContext } from 'react'
import { AuthContext } from '../context/authProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiousSequer from './useAxiousSequer';

const useRoleGuide = () => {
    const {user,loading}=useContext(AuthContext);
    const axiosSecure =useAxiousSequer();
  const {data: isguide,isPending:isguideLoading}=useQuery({
    queryKey: [user?.email,"isguide"],
    enabled: !loading,
    queryFn: async()=>{

        const res=await axiosSecure.get(`/users/guide/${user.email}`)
        // console.log(res.data);
        return res.data.guide;
    }
  })
  return[isguide,isguideLoading];
  
}

export default useRoleGuide
