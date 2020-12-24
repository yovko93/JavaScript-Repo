function solve(examHour, examMinute, arrivalHour, arrivalMinute) {
    examHour = Number(examHour);
    examMinute = Number(examMinute);
    arrivalHour = Number(arrivalHour);
    arrivalMinute = Number(arrivalMinute);

    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;
    let diff = Math.abs(examTime - arrivalTime);

    let hour = 0;
    let minutes = 0;

    if (examTime < arrivalTime) {
        console.log(`Late`);

        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            hour = Math.floor(diff / 60);
            minutes = diff % 60;

            if (minutes < 10) {
                minutes = `0${minutes}`;
            }

            console.log(`${hour}:${minutes} hours after the start`);
        }
    } else if (examTime == arrivalTime || diff <= 30) {
        console.log('On Time');

        if (diff > 0) {
            console.log(`${diff} minutes before the start`);
        }
    } else if (examTime > arrivalTime && diff > 30) {
        console.log('Early');

        if (diff < 60) {
            console.log(`${diff} minutes before the start`);
        } else {
            hour = Math.floor(diff / 60);
            minutes = diff % 60;

            if (minutes < 10) {
                minutes = `0${minutes}`;
            }

            console.log(`${hour}:${minutes} hours before the start`);
        }
    }
}

solve("9",
    "30",
    "9",
    "50");

solve("10",
    "00",
    "10",
    "00");

solve("11",
    "30",
    "8",
    "12");

