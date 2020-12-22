function solve(rent){
    rent = Number(rent);
    let cake = rent * 0.2;
    let drinks = cake - cake*0.45;
    let animator = rent/3;

    let result = rent + cake + drinks + animator;

    console.log(result);
}

solve("2250")