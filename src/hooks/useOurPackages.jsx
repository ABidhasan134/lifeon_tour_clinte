import { useQuery } from "@tanstack/react-query";
import useAxiousPublic from "./useAxiousPublic";


const useOurPackages = () => {
    const axiousPublic=useAxiousPublic();
    const {data: ourpackages=[]}=useQuery({
        queryKey: 'packages',
        queryFn: async()=>{
            const res=await axiousPublic.get('/ourPackages');
            return res.data
        }
      })
      return [ourpackages]
}

export default useOurPackages