function solve(num) {
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    console.log(factorial);
}

solve("4");