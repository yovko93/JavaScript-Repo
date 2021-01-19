function solve(arr) {
    let result = [];

    arr
    .sort((a,b) => a - b)
    .splice(2, arr.length - 2);

    console.log(arr.join(' '));

    // function compareNumbers(a, b) {
    //     return a - b;
    // }
}


solve([30, 15, 50, 5]);