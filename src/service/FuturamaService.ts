import { api } from "../api/api";

export const characters = async () => {
  const { data } = await api.get("/");
  return data;
};
