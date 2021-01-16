//function
// function solve(arr) {
//    let result = [];
   
//    for (const element of arr) {
//        if (element < 0) {
//            result.unshift(element);
//        } else {
//            result.push(element);
//        }
//    }
   
//    result.forEach(x => console.log(x));
// }

// solve([7, -2, 8, 9]);
// solve([3, -2, 0, -1]);


/* Arrow solution */
let specialSort = arr => {
    let result = [];

    arr.forEach(element => { element < 0 
        ? result.unshift(element)
        : result.push(element);
    });

    return result.join('\n');
}

console.log(specialSort([7, -2, 8, 9]));
console.log();