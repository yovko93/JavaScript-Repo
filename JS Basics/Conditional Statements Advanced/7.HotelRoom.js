function solve(month, nights) {
    nights = Number(nights);

    let apartmentPrice = 0;
    let studioPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            apartmentPrice = nights * 65;
            studioPrice = nights * 50;

            if (nights > 14) {
                studioPrice *= 0.7;
            } else if (nights > 7) {
                studioPrice *= 0.95;
            }
            break;

        case 'June':
        case 'September':
            apartmentPrice = nights * 68.7;
            studioPrice = nights * 75.2;

            if (nights > 14) {
                studioPrice *= 0.8;
            }
            break;

        case 'July':
        case 'August':
            apartmentPrice = nights * 77;
            studioPrice = nights * 76;
            break;
    }

    if (nights > 14) {
        apartmentPrice *= 0.9;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

solve("May",
"15");

solve("June",
"14");