import axios, { AxiosInstance } from "axios";
import { API_ENDPOINT } from "../config/api";

export const streamApi : AxiosInstance =  axios.create({
    baseURL: API_ENDPOINT
})