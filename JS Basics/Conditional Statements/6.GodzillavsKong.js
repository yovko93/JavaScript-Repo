function solve(budget, statists, dressPrice) {
    budget = Number(budget);
    statists = Number(statists);
    dressPrice = Number(dressPrice);

    let decor = budget * 0.1;
    let totalDressPrice = dressPrice * statists;

    if (statists > 150) {
        totalDressPrice *= 0.9;
    }

    let totalExpenses = decor + totalDressPrice;

    if (totalExpenses > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalExpenses - budget).toFixed(2)} leva more.`)
    }
    else{
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - totalExpenses).toFixed(2)} leva left.`);
    }
}

solve("20000",
"120",
"55.5");

solve("15437.62",
"186",
"57.99");