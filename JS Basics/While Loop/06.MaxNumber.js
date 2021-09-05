function biggestNumber(input){
    let index = 0;
    let biggestNum = Number(input[0]);

    while (input[index] != "Stop") {
        let currentNum = Number(input[index]);

        if (currentNum > biggestNum) {
            biggestNum = currentNum;
        }

        index++;
    }

    console.log(biggestNum);
}

biggestNumber(["100",
"99",
"80",
"70",
"Stop"]);

biggestNumber(["-10",
"20",
"-30",
"Stop"]);

biggestNumber(["-1",
"-2",
"Stop"]);