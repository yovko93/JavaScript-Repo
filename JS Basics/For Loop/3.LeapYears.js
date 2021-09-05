function solve(highYear, normalYear){
    highYear = Number(highYear);
    normalYear = Number(normalYear);

    for(let i = highYear; i <= normalYear; i += 4){
        console.log(i);
    }
}

solve("1908", "1919");