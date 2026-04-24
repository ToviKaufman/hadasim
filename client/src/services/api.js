import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7273/",
});

export default api;