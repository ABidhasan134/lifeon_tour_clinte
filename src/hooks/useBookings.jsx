import React, { useContext } from 'react'
import useAxiousSequer from './useAxiousSequer';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../context/authProvider';

const useBookings = () => {
  const axiousSequere=useAxiousSequer();
  const {user}=useContext(AuthContext);

    const {data: bookings=[],isLoading,refetch}=useQuery({
        queryKey: 'bookings',
        queryFn: async()=>{
            const res=await axiousSequere.get(`/mybooking/${user.email}`);
            return res.data
        }
      })
      return [bookings,isLoading,refetch]
}

export default useBookings
