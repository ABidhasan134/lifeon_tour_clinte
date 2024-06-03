import axios from "axios";

const axiousPublic=axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})
const useAxiousPublic = () => {
    return axiousPublic
  }
  
  export default useAxiousPublic