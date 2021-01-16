function solve(arr) {
    let firstNumber = Number(arr[0]);
    let secondNumber = Number(arr[arr.length - 1]);

    let sum = firstNumber + secondNumber;

    console.log(sum);
}

solve(['20', '30', '40']);