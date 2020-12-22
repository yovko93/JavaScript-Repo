function calculateSum(deposit, period, annualPercent){
    let depositSum = Number(deposit);
    let months = Number(period);
    let interest = Number(annualPercent);

    let totalSum = depositSum + months*((depositSum*interest/100)/12);

    console.log(totalSum);
}

calculateSum("200", "3", "5.7");