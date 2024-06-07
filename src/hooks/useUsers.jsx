import useAxiousSequer from "./useAxiousSequer";


const useUsers = () => {
    const axiousSequere=useAxiousSequer();

    const {data: users=[],isLoading,refetch}=useQuery({
        queryKey: 'users',
        queryFn: async()=>{
            const res=await axiousSequere.get('/users');
            return res.data
        }
      })
      return [users,isLoading,refetch]
}

export default useUsers
