function solve(n){
    n = Number(n);

    let count = 1;

    while (count <= n) {
        console.log(count);

        count = 2 * count + 1;
    }
}

solve('3');