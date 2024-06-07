import axios from "axios";

const axiosSequer=axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})

const useAxiousSequer = () => {
   // Request interceptor
   axiosSequer.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('access_token');
      // console.log("request intercepted with token", token);
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error.message);
    }
  );

  // Response interceptor
  axiosSequer.interceptors.response.use(
    function (response) {
      // console.log(response);
      return response;
    },
    async (error) => {
      const status = error.response ? error.response.status : null;
      console.log("status code error in interceptor", status);
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  
  return axiosSequer;
}

export default useAxiousSequer
