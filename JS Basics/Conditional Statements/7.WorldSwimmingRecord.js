function solve(record, distance, time) {
    record = Number(record);
    distance = Number(distance);
    time = Number(time);

    let slowTime = (Math.trunc(distance / 15)) * 12.5;
    let ivanTime = distance * time + slowTime;

    if (ivanTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`)
    }
    else {
        console.log(`No, he failed! He was ${(ivanTime - record).toFixed(2)} seconds slower.`);
    }
}

solve("10464",
"1500",
"20");

solve("55555.67",
"3017",
"5.03");