function solve(n, k) {
    n = Number(n);
    k = Number(k);

    let result = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = k;

        if (k > i) {
            startIndex = i
        }
        
        let currentArr = result.slice(result.length - startIndex);
        let sum = currentArr.reduce((x, i) => x + i);
        
        result[i] = sum;
    }

    return result;
}

console.log(solve(6, 3));