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