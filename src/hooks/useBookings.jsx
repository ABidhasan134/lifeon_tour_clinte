import React, { useContext } from 'react'
import useAxiousSequer from './useAxiousSequer';
import { useQuery } from '@tanstack/react-query';

const useBookings = (email) => {
  console.log(email);
  const axiousSequere=useAxiousSequer();

    const {data: bookings=[],isLoading,refetch}=useQuery({
        queryKey: ['bookings',email],
        queryFn: async()=>{
            const res=await axiousSequere.get(`/mybooking/${email}`);
            return res.data
        }
      })
      return [bookings,isLoading,refetch]
}

export default useBookings
