function solve(number){
    number = Number(number);

    if ((number < 100 || number > 200) && number != 0) {
        console.log("invalid");
    }
}

solve("75");
solve("-1");
solve("0");