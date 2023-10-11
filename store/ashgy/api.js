import axios from "axios"
import { ASHGY_SECRET } from "react-native-dotenv"
const ashgy = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/121649/connectors",
  params: { private_key: ASHGY_SECRET },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
