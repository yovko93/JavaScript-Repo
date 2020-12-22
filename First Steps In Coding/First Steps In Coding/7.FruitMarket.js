function solve(strawberryPrice, bananasKg, orangesKg, raspberryKg, strawberryKg) {
    strawberryPrice = Number(strawberryPrice);
    bananasKg = Number(bananasKg);
    orangesKg = Number(orangesKg);
    raspberryKg = Number(raspberryKg);
    strawberryKg = Number(strawberryKg);

    let raspberryPrice = strawberryPrice / 2;
    let orangesPrice = raspberryPrice - raspberryPrice * 0.4;
    let bananasPrice = raspberryPrice - raspberryPrice * 0.8;

    let totalPrice = (strawberryPrice * strawberryKg) + (orangesPrice * orangesKg) + (raspberryPrice * raspberryKg) + (bananasPrice * bananasKg);
    console.log(totalPrice);
}

solve("48",
    "10",
    "3.3",
    "6.5",
    "1.7");