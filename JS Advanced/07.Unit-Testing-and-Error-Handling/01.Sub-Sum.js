function sumRange(numbers, startIndex, endIndex) {
    if (Array.isArray(numbers) == false) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > numbers.length - 1) {
        endIndex = numbers.length - 1;
    }

    return numbers
        .slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((acc, x) => acc + x, 0);

}

console.log(sumRange([10, 20, 30, 40, 50, 60], 3, 300));
console.log(sumRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sumRange([10, 'twenty', 30, 40], 0, 2));