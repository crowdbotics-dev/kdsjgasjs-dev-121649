import axios from "axios"
import { G20_USERNAME, G20_PASSWORD } from "react-native-dotenv"
const ktm = axios.create({
  baseURL: "https://devstringx.com",
  auth: { username: G20_USERNAME, password: G20_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
