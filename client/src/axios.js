import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:5000/api/",
  withCredentials: true,
});