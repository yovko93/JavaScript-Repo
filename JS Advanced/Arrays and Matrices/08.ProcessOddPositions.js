function oddPositions(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 !== 0) {
            result.push(numbers[i] * 2);
        }
    }

    return result.reverse();
}

/* second way
function solve(arr) {
    return arr
    .filter((x,i) => i % 2 != 0)
    .map(x => x + x)
    .reverse()
    .join(' ');
}
*/

console.log(oddPositions([10, 15, 20, 25]));