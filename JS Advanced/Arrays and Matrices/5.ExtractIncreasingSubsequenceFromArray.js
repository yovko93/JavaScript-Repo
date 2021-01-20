function solve(arr) {

    let result = arr.reduce(function (result, currentValue) {
        if (currentValue >= result[result.length - 1] || result.length === 0) {
            result.push(currentValue);
        }
        return result;
    }, []);

    return result;
}


console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));

//function solve(arr) {
    // let currentNum = 0;
    // const result = [];

    // for (let num of arr) {

    //     if (num >= currentNum) {
    //         currentNum = num;
    //         result.push(currentNum);
    //     }
    // }
//}