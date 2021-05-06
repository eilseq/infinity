import axios from "axios";

export const getUniverses = async () => {
  return await axios.get("http://localhost:3000/universes");
};

export const getStars = async () => {
  return await axios.get("http://localhost:3000/stars");
};
