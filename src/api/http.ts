import axios from "axios"
const BASE_URL = import.meta.env.VITE_API_URL as string

const http = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" }
  //   withCredentials: true
})

export default http
