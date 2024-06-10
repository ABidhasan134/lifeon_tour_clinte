import axios from "axios";

const axiousPublic=axios.create({
    baseURL: "https://lifeon-server.vercel.app",
    withCredentials: true,
})
const useAxiousPublic = () => {
    return axiousPublic
  }
  
  export default useAxiousPublic