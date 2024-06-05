import axios from "axios";

const axiosSequer=axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})

const useAxiousSequer = () => {
  return axiosSequer;
}

export default useAxiousSequer
