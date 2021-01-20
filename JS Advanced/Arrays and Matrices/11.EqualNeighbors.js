function equalNeighbors(input) {
    let result = 0;
    let nextArr = 1;

    input.forEach(array => {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (nextArr != input.length) {
                let neighb = input[nextArr][index]
                if (element == neighb) {
                    result++;
                }
                if (element == array[index + 1]) {
                    result++;
                }
            }
            else {
                if (element == array[index + 1]) {
                    result++;
                }
            }
        }
        nextArr++;
    });

    return result;
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));

console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));

// function equalNeighbors(matrix) {
//     let count = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         for (let l = 0; l < matrix[i].length; l++) {
//             const element = matrix[i][l];
//             const neighborA = matrix[i][l + 1];
//             if (element === neighborA) {
//                 count++;
//             }
//             if (i < matrix.length - 1) {
//                 const neighborB = matrix[i + 1][l];
//                 if (element === neighborB) {
//                     count++;
//                 }
//             }
//         }
//     }
//     return count;
// }