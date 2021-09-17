function sortingNumbers(numbers){
    const result = [];

    numbers
    .sort((a,b) => a- b);

    while (numbers.length) {
        let firstElement = numbers.shift();
        let secondElement = numbers.pop();

        result.push(firstElement, secondElement);
        
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));