
import { useQuery } from '@tanstack/react-query';
import useAxiousPublic from './useAxiousPublic';
import { useContext } from 'react';
import { AuthContext } from '../context/authProvider';

const useGuide = () => {
    const axiousPublic=useAxiousPublic();
    const {user}=useContext(AuthContext);
    const {data: Guides=[]}=useQuery({
        queryKey: 'Guides',
        queryFn: async()=>{
            const res=await axiousPublic.get(`/guides`);
            return res.data
        }
      })
      return [Guides]
}

export default useGuide;
