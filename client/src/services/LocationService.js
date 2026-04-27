import api from "./api";


export const getLocations = async () => {
  const response = await api.get("/api/location");
  return response.data;
};

export const sendLocation = async (location) => {
  const response = await api.post("/api/location", location);
  return response.data;
};