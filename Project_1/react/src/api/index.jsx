import axios from "axios";

export const ecommerceApi = axios.create({
  baseURL: "http://localhost:1337",
});
