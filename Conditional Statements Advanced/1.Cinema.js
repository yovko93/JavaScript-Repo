function solve(type, rows, cols) {
    rows = Number(rows);
    cols = Number(cols);

    let income = 0;

    let tickets = rows * cols;

    if (type == 'Premiere') {
        income = tickets * 12;
    } else if (type == 'Normal') {
        income = tickets * 7.5;
    } else if (type == 'Discount') {
        income = tickets * 5;
    }

    console.log(income);
}

solve("Premiere",
"10",
"12");