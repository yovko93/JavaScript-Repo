function solve(n1, n2) {
    n1 = Number(n1);
    n2 = Number(n2);

    let sum = 0;
    let numbers = '';

    for (let i = n1; i <= n2; i++) {
        if (i % 9 == 0) {
            sum += i;
            numbers = numbers + i + "\n";
        }
    }

    console.log(`The sum: ${sum}`)
    console.log(numbers);
}

solve("100", "200");