function solve(hour, minutes) {
    hour = Number(hour);
    minutes = Number(minutes);

    let totalTime = (hour * 60) + minutes + 15;

    let currentHour = Math.floor(totalTime / 60);
    let currentMinutes = totalTime % 60;

    if (currentHour > 23) {
        currentHour -= 24;
    }

    if (currentMinutes < 10) {
        console.log(`${currentHour}:0${currentMinutes}`)
    }
    else {
        console.log(`${currentHour}:${currentMinutes}`)
    }
}

solve("1", "46");
solve("0", "01");