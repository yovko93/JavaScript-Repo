function solve(sec1, sec2, sec3) {
    sec1 = Number(sec1);
    sec2 = Number(sec2);
    sec3 = Number(sec3);

    let totalTime = sec1 + sec2 + sec3;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}

solve("35", "45", "44");
solve("14", "12", "10");