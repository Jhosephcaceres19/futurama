import axios from "axios";

export const api = axios.create({
  baseURL: "https://futuramaapi.com/api/characters",
  headers: {
    "Content-Type": "aplication/json",
  },
});
