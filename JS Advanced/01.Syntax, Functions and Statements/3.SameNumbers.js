function solve(num) {
    let sum = 0;
    let isEqual = true;

    let lastNumber = num % 10;

    while (num !== 0) {
        let currentNum = num % 10;
        num = num - currentNum;
        num /= 10;

        sum += currentNum;

        if (currentNum !== lastNumber) {
            isEqual = false;
        }

        lastNumber = currentNum;
    }

    console.log(isEqual);
    console.log(sum);
}

solve(2222222);
solve(1234);