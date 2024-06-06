
import { useQuery } from '@tanstack/react-query';
import useAxiousPublic from './useAxiousPublic';

const useStory = () => {
    const axiousPublic=useAxiousPublic();

    const {data: storys=[],isLoading,refetch}=useQuery({
        queryKey: 'storys',
        queryFn: async()=>{
            const res=await axiousPublic.get('/storys');
            return res.data
        }
      })
      return [storys,isLoading,refetch]
      
}

export default useStory;
