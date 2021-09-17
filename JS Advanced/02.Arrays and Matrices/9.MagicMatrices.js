// function magicMatrices(matrix) {
//     // let rowSums = [];
//     // let colSums = [];

//     let rowSums = matrix.map((el) => el.reduce((a, b) => a + b, 0));
//     // for (i = 0; i < matrix.length; i++) {
//     //     let row = matrix[i];
//     //     let sum = row.reduce((result, curr) => (result + curr), 0);
//     //     rowSums.push(sum);
//     // }

//     let colSums = matrix.map((r, i) => matrix[0].map((col, y) => matrix[y][i]));
//     // for (let i = 0; i < matrix.length; i++) {
//     //     let newRow = [];
//     //     for (let y = 0; y < matrix.length; y++) {
//     //         let index = matrix.length - 1 - y;
//     //         newRow.push(matrix[index][i]);
//     //     }

//     //     let sum = newRow.reduce((result, curr) => (result + curr), 0);
//     //     colSums.push(sum);
//     // }

//     return rowSums.concat(colSums).every((el, i, arr) => el === arr[0]);
// }

function solve (arr){
    let rowSums = [];
    let colSums = [];

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        let sum = row.reduce((result, curr) => (result + curr), 0);
        rowSums.push(sum);
    }

    for (let i = 0; i < arr.length; i++) {
        let newRow = [];
        for (let y = 0; y < arr.length; y++) {
            newRow.push(arr[y][i]);
        }

        let sum = newRow.reduce((result, curr) => (result + curr), 0);
        colSums.push(sum);
    }

    return rowSums.concat(colSums).every((el, i, arr) => el === arr[0]);
}

console.log(solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));
