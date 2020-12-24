function solve(firstNum, secondNum, operator) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    let result = 0;
    let resultType = 'odd';

    switch (operator) {
        case '+':
        case '-':
        case '*':
            if (operator === '+') {
                result = firstNum + secondNum;
            } else if (operator === '-') {
                result = firstNum - secondNum;
            } else if (operator === '*') {
                result = firstNum * secondNum;
            }
            if (result % 2 == 0) {
                resultType = 'even';
            }

            console.log(`${firstNum} ${operator} ${secondNum} = ${result} - ${resultType}`);

            break;

        case '/':
        case '%':
            if (secondNum === 0) {
                console.log(`Cannot divide ${firstNum} by zero`);
                break;
            }

            if (operator === '/') {
                result = firstNum / secondNum;
                console.log(`${firstNum} / ${secondNum} = ${result.toFixed(2)}`);
            } else if (operator === '%') {
                result = firstNum % secondNum;
                console.log(`${firstNum} % ${secondNum} = ${result}`);
            }
            break;
    }
}

solve("10",
    "12",
    "+");

solve("123",
    "12",
    "/");

solve("112",
    "0",
    "/");

    solve("10",
    "3",
    "%");    