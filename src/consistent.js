export const createAPILink = (fromPoint, toPoint) =>
  `https://transportapi.com/v3/uk/public/journey/from/postcode:${fromPoint}/to/postcode:${toPoint}.json?app_id=7558d875&app_key=13aaeb933ff1d107d096127db22eccf7&service=tfl`;

export const MODE_IMAGE = {
  foot: "/assets/walkman.png",
  bus: "/assets/Buses.png",
  overground: "/assets/Overground.png",
  dlr: "/assets/DLR.png",
  train: "/assets/Train.png",

  Northern: "/assets/Northern.png",
  Central: "/assets/Central.png",
  Circle: "/assets/Circle.png",
  District: "/assets/District.png",
  Jubilee: "/assets/Jubilee.png",
  Metropolitan: "/assets/Metropolitan.png",
  Piccadilly: "/assets/Piccadilly.png",
  Victoria: "/assets/Victoria.png",
  Bakerloo: "/assets/Bakerloo.png",
  "Hammersmith & City": "/assets/HammerSmith_City.png",
  "Waterloo & City": "/assets/Waterloo_City.png",
};

export const PATH_COLOR = {
  foot: { color: "lime" },
  bus: { color: "blue" },
  overground: { color: "#EE7C0E" },
  dlr: { color: "#00A4A7" },
  train: { color: "navy" },

  Northern: { color: "#000000" },
  Central: { color: "#E32017" },
  Circle: { color: "#FFD300" },
  District: { color: "#00782A" },
  Jubilee: { color: "rgb(80, 80, 80)" },
  Metropolitan: { color: "A9B0056" },
  Piccadilly: { color: "003688" },
  Victoria: { color: "#0098D4" },
  Bakerloo: { color: "#B36305" },
  "Hammersmith & City": { color: "#F3A9BB" },
  "Waterloo & City": { color: "#95CDBA" },
};
