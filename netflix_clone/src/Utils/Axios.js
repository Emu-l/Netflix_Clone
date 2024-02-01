import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// Add an interceptor to set the authorization header for all requests
instance.interceptors.request.use(
  (config) => {
    // Get the API key from environment variable or any other source
    const API_KEY = process.env.REACT_APP_API_KEY;

    // Set the authorization header with the API key
    config.headers["Authorization"] = `Bearer ${API_KEY}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
