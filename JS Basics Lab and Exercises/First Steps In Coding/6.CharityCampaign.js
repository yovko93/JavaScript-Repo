function solve(days, bakers, cakes, waffles, pancakes){
    days = Number(days);
    bakers = Number(bakers);
    cakes = Number(cakes);
    waffles = Number(waffles);
    pancakes = Number(pancakes);

    let sumPerDay = ((cakes * 45) + (waffles * 5.8) + (pancakes * 3.2)) * bakers;
    let totalSum = sumPerDay * days;

    let totalMoney = totalSum - (totalSum/8);

    console.log(totalMoney);
}

solve("23",
"8",
"14",
"30",
"16")
;