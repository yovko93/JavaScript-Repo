function solve(input) {

    let minNumber = Number.MAX_VALUE;

    for (let i = 1; i < input.length; i++) {
        let current = Number(input[i]);

        if (current < minNumber) {
            minNumber = current;
        }
    }

    console.log(minNumber);
}

solve(["2",
"100",
"99"]);

solve(["3",
"-10",
"20",
"-30"]);