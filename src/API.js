export const createAPILink = (fromPoint, toPoint) =>
  `https://transportapi.com/v3/uk/public/journey/from/postcode:${fromPoint}/to/postcode:${toPoint}.json?app_id=7558d875&app_key=13aaeb933ff1d107d096127db22eccf7&service=tfl`;
