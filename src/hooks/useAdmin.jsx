import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../context/authProvider';
import useAxiousSequer from './useAxiousSequer';



const useAdmin = () => {
    const {user,loading}=useContext(AuthContext);
    const axiosSecure =useAxiousSequer();
  const {data: isAdmin,isPending:isAdminLoading}=useQuery({
    queryKey: [user?.email,"isAdmin"],
    enabled: !loading,
    queryFn: async()=>{

        const res=await axiosSecure.get(`/users/admin/${user.email}`)
        // console.log(res.data);
        return res.data.admin;
    }
  })
  return[isAdmin,isAdminLoading];
}

export default useAdmin
