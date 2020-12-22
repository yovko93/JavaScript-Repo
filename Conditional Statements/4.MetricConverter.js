function solve(num, input, output) {
    num = Number(num);

    if (input === "mm") {
        num /= 1000;
    } else if (input === "cm") {
        num /= 100;
    }

    if (output === "cm") {
        num *= 100;
    } else if (output === "mm") {
        num *= 1000;
    }

    console.log(num.toFixed(3));
}

solve("150", "m", "cm");
solve("12", "mm", "m");