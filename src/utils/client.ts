import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:4001/anime/gogoanime",
});

export default client;
