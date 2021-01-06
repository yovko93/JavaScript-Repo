function solve(input) {
    let command = input[0];

    let index = 0;
    let accountMoney = 0;

    while (command != "NoMoreMoney") {
        let currentValue = Number(command);

        if (currentValue < 0) {
            console.log(`Invalid operation!`);

            break;
        } 

        accountMoney += currentValue;
        console.log(`Increase: ${currentValue.toFixed(2)}`);

        index++;
        command = input[index];
    }

    console.log(`Total: ${accountMoney.toFixed(2)}`);

}

solve(["5.51", 
"69.42",
"100",
"NoMoreMoney"]);

solve(["120",
"45.55",
"-150"]);