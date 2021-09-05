function solve(year, holidays, weekends) {
    holidays = Number(holidays);
    weekends = Number(weekends);

    let weekendInSofia = 48 - weekends;
    let playWeekendsInSofia = weekendInSofia *3/4;
    let playInHolidays = holidays * 2/3;
    let playTime = (playInHolidays + playWeekendsInSofia + weekends);

    if (year === 'leap') {
        playTime *= 1.15;
    }

    console.log(Math.floor(playTime));
}

solve("leap",
"5",
"2");

solve("normal",
"3",
"2");