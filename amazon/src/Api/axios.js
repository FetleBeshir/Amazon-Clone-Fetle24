import axios from 'axios';
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/project-a1229/us-central1/api",
  baseURL: "https://api-kkinagn73q-uc.a.run.app"
});

export {axiosInstance}