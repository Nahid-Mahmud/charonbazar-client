import axios from "axios";

// create an instance of axios for public api
const publicApi = axios.create({
  baseURL: `${import.meta.env.VITE_baseUrl}`,
});

export const usePublicApi = () => publicApi;
