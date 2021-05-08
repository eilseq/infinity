import axios from "axios";
import wrapper from "axios-cache-plugin";

let http = wrapper(axios, {
  maxCacheSize: 15,
});

http.__addFilter(/universes/);
export const getUniverses = async () => {
  return await http.get("http://localhost:3000/universes");
};

http.__addFilter(/stars/);
export const getStars = async () => {
  return await axios.get("http://localhost:3000/stars");
};
