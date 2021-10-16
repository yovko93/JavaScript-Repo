function solve(arr, type) {
    const map = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a,
    }

    return arr.sort(map[type]);
}


//// second way
// function solve(arr, string) {
//     switch (string) {
//         case 'asc': arr.sort((a, b) => a - b); break;
//         case 'desc': arr.sort((a, b) => b - a); break;
//     }

//     return arr;
// }

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));