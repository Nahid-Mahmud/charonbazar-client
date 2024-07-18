import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_baseUrl,
});

const useSecureApi = () => {
  const navigate = useNavigate();

  //   signout method from useAuth

  const { singoutUser } = useAuth();

  // inrercepting  for token

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  //  intercepting for 401 response

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        singoutUser();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useSecureApi;
