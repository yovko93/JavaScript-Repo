function solve(input) {
    let firstNum = Number(input[0]);

    let currentNum = Number(input[1]);
    let index = 2;
    let sum = currentNum;

    while (sum < firstNum) {
        currentNum = Number(input[index]);
        index++;
        sum += currentNum;
    }

    console.log(sum);
}

solve(["100",
    "10",
    "20",
    "30",
    "40"])
