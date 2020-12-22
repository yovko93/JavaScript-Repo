function solve(tripPrice, puzzles, dolls, teddyBears, minions, trucks) {
    tripPrice = Number(tripPrice);
    puzzles = Number(puzzles);
    dolls = Number(dolls);
    teddyBears = Number(teddyBears);
    minions = Number(minions);
    trucks = Number(trucks);

    let puzzlesPrice = puzzles * 2.6;
    let dollsPrice = dolls * 3;
    let bearsPrice = teddyBears * 4.1;
    let minionsPrice = minions * 8.2;
    let trucksPrice = trucks * 2;

    let price = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;
    let countToys = puzzles + dolls + teddyBears + minions + trucks;

    if (countToys >= 50) {
        let discount = price * 0.25;
        price = price - discount;
    }

    let totalPrice = price * 0.9;

    if (totalPrice >= tripPrice) {
        console.log(`Yes! ${(totalPrice - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - totalPrice).toFixed(2)} lv needed.`)
    }
}

solve("40.8", "20", "25", "30", "50", "10");