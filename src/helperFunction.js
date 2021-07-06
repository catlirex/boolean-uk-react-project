export function setZoomScale(timeString) {
  let target = timeString.split(":");
  if (Number(target[0]) > 1) return 10;
  if (Number(target[0]) === 1) return 11;
  if (Number(target[0]) === 0 && Number(target[1] > 30)) return 13;
  else return 14;
}
