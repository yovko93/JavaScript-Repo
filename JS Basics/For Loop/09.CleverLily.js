function smartLily(age, washerPrice, toyPrice) {
    age = Number(age);
    washerPrice = Number(washerPrice);
    toyPrice = Number(toyPrice);

    let lilyMoney = 0;
    let toys = 0;
    let brotherMoney = 0;
    let money = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            lilyMoney += money;
            brotherMoney++;
            money += 10;
        } else {
            toys++;
        }
    }

    lilyMoney = lilyMoney + (toys * toyPrice - brotherMoney);

    if (lilyMoney >= washerPrice) {
        console.log(`Yes! ${(lilyMoney - washerPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerPrice - lilyMoney).toFixed(2)}`);
    }
}

smartLily("10", "170", "6");
smartLily("21", "1570.98", "3");