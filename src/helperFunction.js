export function splitDurationToNumberArray(duration) {
  let numArray = duration.split(":");
  return numArray.map((target) => Number(target));
}

export function setZoomScale(timeString) {
  let numArray = splitDurationToNumberArray(timeString);
  if (numArray[0] > 1) return 10;
  if (numArray[0] === 1) return 11;
  if (numArray[0] === 0 && numArray[1] > 30) return 12;
  else return 13;
}
