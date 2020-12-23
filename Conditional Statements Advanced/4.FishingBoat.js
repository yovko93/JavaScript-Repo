function solve(budget, season, fishermans) {
    budget = Number(budget);
    fishermans = Number(fishermans);

    let expenses = 0;

    switch (season) {
        case 'Spring':
            expenses += 3000;
            break;

        case 'Summer':
        case 'Autumn':
            expenses += 4200;
            break;

        case 'Winter':
            expenses += 2600;
            break;
    }

    if (fishermans <= 6) {
        expenses *= 0.9;
    } else if (fishermans > 6 && fishermans <= 11) {
        expenses *= 0.85;
    } else if (fishermans > 11) {
        expenses *= 0.75;
    }

    if (fishermans % 2 == 0 && season !== 'Autumn') {
        expenses *= 0.95;
    }

    if (budget >= expenses) {
        console.log(`Yes! You have ${(budget - expenses).toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money! You need ${(expenses - budget).toFixed(2)} leva.`);
    }
}

solve("3000",
"Summer",
"11");

solve("3600",
"Autumn",
"6");