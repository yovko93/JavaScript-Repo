function solve(arr){
    let sum = 0;
    let sumOfInverseValues = 0;
    let str = '';

    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
        sumOfInverseValues += (1/Number(arr[i]));
        str += arr[i];
    }
    console.log(sum);
    console.log(sumOfInverseValues.toFixed(4));
    console.log(str);
}

solve([1, 2, 3]);