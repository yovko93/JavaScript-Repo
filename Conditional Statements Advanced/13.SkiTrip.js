function solve(days, roomType, grade) {
    days = Number(days);

    let nights = days - 1;
    let price = 0.0;

    switch (roomType) {
        case 'room for one person':
            price = nights * 18;
            break;

        case "apartment":
            price = nights * 25;

            if (days < 10) {
                price = price - (price * 0.3);
            } else if (days <= 15) {
                price = price - (price * 0.35);
            } else if (days > 15) {
                price = price - (price * 0.5);
            }
            break;

        case 'president apartment':
            price = nights * 35;

            if (days < 10) {
                price = price - (price * 0.1);
            } else if (days <= 15) {
                price = price - (price * 0.15);
            } else if (days > 15) {
                price = price - (price * 0.2);
            }
            break;
    }

    if (grade === 'positive') {
        price *= 1.25;
    } else if (grade === 'negative') {
        price *= 0.9;
    }

    console.log(price.toFixed(2));
}

solve("14",
"apartment",
"positive");

solve("30",
"president apartment",
"negative");

solve("12",
"room for one person",
"positive");