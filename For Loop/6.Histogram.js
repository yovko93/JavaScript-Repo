function solve(input) {
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i < input.length; i++) {
        let currentNum = Number(input[i]);

        if (currentNum < 200) {
            p1++;
        } else if (currentNum < 400) {
            p2++;
        } else if (currentNum < 600) {
            p3++;
        } else if (currentNum < 800) {
            p4++
        } else {
            p5++;
        }
    }

    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
    console.log(`${(p4 / n * 100).toFixed(2)}%`);
    console.log(`${(p5 / n * 100).toFixed(2)}%`);
}

solve(["3",
    "1",
    "2",
    "999"]);