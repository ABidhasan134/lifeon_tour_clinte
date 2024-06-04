
import { useQuery } from '@tanstack/react-query';
import useAxiousPublic from './useAxiousPublic';

const useGuide = () => {
    const axiousPublic=useAxiousPublic();
    const {data: Guides=[]}=useQuery({
        queryKey: 'Guides',
        queryFn: async()=>{
            const res=await axiousPublic.get('/guides');
            return res.data
        }
      })
      return [Guides]
}

export default useGuide;
