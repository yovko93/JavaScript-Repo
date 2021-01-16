function solve(first, second, third){
    let firstLength = first.length;
    let secondLength = second.length;
    let thirdLength = third.length;

    let sumLength = firstLength + secondLength + thirdLength;
    let averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');