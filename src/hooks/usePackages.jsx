import { useQuery } from "@tanstack/react-query";
import useAxiousPublic from "./useAxiousPublic";


const usePackages = () => {
    const axiousPublic=useAxiousPublic();
    const {data: packages=[]}=useQuery({
        queryKey: 'packages',
        queryFn: async()=>{
            const res=await axiousPublic.get('/packages');
            return res.data
        }
      })
      return [packages]
}

export default usePackages
