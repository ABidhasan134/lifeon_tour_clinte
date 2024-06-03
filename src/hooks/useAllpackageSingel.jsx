import { useQuery } from "@tanstack/react-query";
import useAxiousPublic from "./useAxiousPublic";


const usePackages = () => {
    const axiousPublic=useAxiousPublic();
    const {data: singelDetails=[]}=useQuery({
        queryKey: 'packages',
        queryFn: async()=>{
            const res=await axiousPublic.get(`/alltourdetail/${singelDetails._id}`);
            return res.data
        }
      })
      return [singelDetails]
}

export default usePackages