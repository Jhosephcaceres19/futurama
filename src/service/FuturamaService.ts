import { api } from "../api/api";

export const getCharacters = async () => {
  const { data } = await api.get("/");
  return data;
};
