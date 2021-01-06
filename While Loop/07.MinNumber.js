function minNumber(input) {
    let minNum = Number.MAX_SAFE_INTEGER;
    let index = 0;

    while (input[index] != `Stop`) {
        let currentNum = Number(input[index]);

        if (currentNum < minNum) {
            minNum = currentNum;
        }

        index++;
    }

    console.log(minNum);
}

minNumber(["100",
"99",
"80",
"70",
"Stop"]);

minNumber(["-10",
"20",
"-30",
"Stop"]);