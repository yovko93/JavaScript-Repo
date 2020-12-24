function solve(budget, season) {
    budget = Number(budget);

    let destination;
    let typePlace = 'Hotel';
    let price = 0;

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            typePlace = 'Camp';
            price = budget * 0.3;

        } else if (season === 'winter') {
            price = budget * 0.7;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            typePlace = 'Camp';
            price = budget * 0.4;

        } else if (season === 'winter') {
            price = budget * 0.8;
        }
    } else if (budget > 1000) {
        destination = 'Europe';
        price = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${typePlace} - ${price.toFixed(2)}`);
}

solve("50", "summer");