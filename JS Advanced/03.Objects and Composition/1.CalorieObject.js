function calorieObject(arr){
    let result = {};
    
    for (let i = 0; i < arr.length; i += 2) {
        result[arr[i]] = Number(arr[i + 1]);
    }

    return result;
}

// // second way
// function calorieObject(arr){
//     let result = {};
    
//     arr.forEach((el, i) => {
//         if (i % 2 == 0) {
//             result[el] = undefined;
//         } else {
//             result[arr[i-1]] = el;
//         }
//     });

//     return result;
// }

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));