
import { useContext } from 'react';
import useAxiousSequer from './useAxiousSequer';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../context/authProvider';

const useWishList = () => {
    const axiousSequere=useAxiousSequer();
    const {user}=useContext(AuthContext)

    const {data: wishlist=[],isLoading,refetch}=useQuery({
        queryKey: 'wishlist',
        queryFn: async()=>{
            const res=await axiousSequere.get(`/wishlist/${user.email}`);
            return res.data
        }
      })
      return [wishlist,isLoading,refetch]
}

export default useWishList
