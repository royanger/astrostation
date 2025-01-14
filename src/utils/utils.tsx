export const cls = (input: string) =>
  input
    .replace(/\s+/gm, " ")
    .split(" ")
    .filter((cond: string) => typeof cond === "string")
    .join(" ")
    .trim();

// return minutes and seconds of seconds
export function secondsToTime(seconds: number) {
  return [Math.floor(seconds / 60), seconds % 60];
}

// zero paddings if < 10
export function formatDisplayTime(time: number) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
}
