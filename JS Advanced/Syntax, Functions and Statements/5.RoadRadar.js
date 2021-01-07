function solve(speed, area) {
    let limit = 0;

    switch (area) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;

    }

    let speeding = speed - limit;

    if (speeding > 0 && speeding <= 20) {
        console.log(`speeding`);
    } else if (speeding > 20 && speeding <= 40) {
        console.log(`excessive speeding`);
    } else if (speeding > 40) {
        console.log(`reckless driving`);
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');