import axios from "axios";

export const eCommerceApi = axios.create({
  baseURL: "http://localhost:1337",
});
