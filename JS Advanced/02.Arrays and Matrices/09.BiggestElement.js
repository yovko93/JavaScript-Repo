function biggestElement(numbers) {
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (let row of numbers) {
        
        for (let num of row) {
            if (num > biggestNumber) {
                biggestNumber = num;
            }
        }
    }

    return biggestNumber;
}

console.log(biggestElement([[20, 50, 10],
[8, 33, 145]]));