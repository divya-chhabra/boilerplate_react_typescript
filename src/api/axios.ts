import axios from "axios";
import { config } from "./config";

const axiosInstance = axios.create(config);
 
// Response interceptor for global error handling
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        // Server responded with a status outside of 2xx
        switch (error.response.status) {
          case 401: console.error("Unauthorized - Logging out..."); break;
          case 404: console.error("Resource not found"); break;
          case 500: console.error("Server error"); break;
          default: console.error("Request failed:", error.message);
        }
      } else if (error.request) {
        // Request was made but no response received
        console.error("Network error: Please check your connection.");
      }
      return Promise.reject(error);
    }
  );

export default axiosInstance;