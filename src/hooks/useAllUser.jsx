import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../context/authProvider';
import useAxiousSequer from './useAxiousSequer';

const useAllUser = () => {
    const axiosSequer=useAxiousSequer();
    const {user}=useContext(AuthContext);
    const {data: allUser=[],refetch,isLoading}=useQuery({
        queryKey: ['allUser',user.email],
        queryFn: async()=>{
            const res=await axiosSequer.get(`/allUser`);
            return res.data
        }
      })
      return [allUser,refetch,isLoading]
}

export default useAllUser
