function solve(steps, stepLength, speed) {
  let distanceMeters = steps * stepLength;
  let speedMetersSec = speed / 3.6;

  let rest = Math.floor(distanceMeters / 500);
  let time = distanceMeters / speedMetersSec + rest * 60;

  let timeMin = Math.floor(time / 60);
  let timeSec = Math.round(time % 60);
  let timeHr = Math.floor(time / 3600);

  console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin < 10 ? "0" : "") + timeMin + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);

// function solve2(steps, stepLength, speed) {
//   const speed = speed * 1000 / 3600;
//   const distance = steps * footprint;

//   const rest = Math.floor(distance / 500) * 60;
//   const time = distance / speed + rest;

//   const hours = Math.floor(time / 60 / 60).toFixed(0).padStart(1, "0");
//   const minutes = Math.floor((time - hours * 3600) / 60).toFixed(0).padStart(2, "0");
//   const seconds = (time - hours * 60 * 60 - minutes * 60).toFixed(0).padStart(3, "0");

//   return `${hours}:${minutes}:${seconds}`;
// }