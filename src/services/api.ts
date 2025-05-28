import axios from "axios";
import { APIConfig } from "../config/apiConfig";

export const api = axios.create({
  baseURL: APIConfig.baseUrl,
  headers: {
    Authorization: `Bearer ${APIConfig.apiKey}`,
    "Content-Type": "application/json",
  },
});
