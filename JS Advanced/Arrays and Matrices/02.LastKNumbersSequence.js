function solve(n, k) {
    n = Number(n);
    k = Number(k);

    let arr = [1, 1];

    for (let i = 2; i < n; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]);


    }

    
    console.log();
}

solve();

