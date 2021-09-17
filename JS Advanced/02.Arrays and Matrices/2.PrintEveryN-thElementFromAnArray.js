function solve(arr, step) {
    const result = [];

    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }

    return result;

    // second way --->
    // return arr.filter((el, i) => i % step === 0);
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));