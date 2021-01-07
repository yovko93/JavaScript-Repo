function solve(input) {
    let inputType = typeof (input);
    let num;

    if (inputType === 'number') {
        num = Number(input);
    } else {
        num = 5;
    }

    for (let i = 0; i < num; i++) {
        console.log('* '.repeat(num));
    }
}

solve(4);