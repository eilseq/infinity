// import axios from "axios";
// import wrapper from "axios-cache-plugin";

// let http = wrapper(axios, {
//   maxCacheSize: 15,
// });

// http.__addFilter(/universes/);
// http.__addFilter(/stars/);

//lazy deployment
const json = {
  colors: ["RED", "BLUE", "GREEN", "YELLOW", "BLACK"],
  stars: [
    {
      color: "RED",
      id: 123,
      name: "My happy star 123",
      universeId: 333,
    },
    {
      color: "YELLOW",
      id: 321,
      name: "321 is myy happy star",
      universeId: 333,
    },
  ],
  universes: [
    {
      id: 333,
      maxSize: 3,
      name: "Big universe",
    },
    {
      id: 323,
      maxSize: 1,
      name: "Smallest universe",
    },

    {
      id: 343,
      maxSize: 6,
      name: "Very Big universe",
    },
    {
      id: 133,
      maxSize: 4,
      name: "Bigger universe",
    },
    {
      id: 342,
      maxSize: 8,
      name: "Biggest universe",
    },
  ],
};

export const getUniverses = async () => {
  return json.universes;
};

export const getStars = async () => {
  return json.stars;
};
