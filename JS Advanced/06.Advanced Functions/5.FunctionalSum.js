function solve(a) {
    let sum = 0;
    sum += a;

    function calc(b) {
        sum += b;
        return calc;
    }

    calc.toString = () => sum;

    return calc;
}

console.log(solve(1));
console.log(solve(1)(6)(-3));