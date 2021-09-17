function solve(arr) {
    let firstNumber = Number(arr.shift());
    let secondNumber = Number(arr.pop());

    return firstNumber + secondNumber;

}

console.log(solve(['20', '30', '40']));