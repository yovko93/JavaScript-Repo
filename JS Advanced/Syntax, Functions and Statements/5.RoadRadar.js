function solve(speed, area) {
    let limit = 0;
    let status;

    switch (area) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;

    }

    let speeding = speed - limit;

    if (speeding > 0 && speeding <= 20) {
        status = `speeding`;
    } else if (speeding > 20 && speeding <= 40) {
        status = `excessive speeding`;
    } else if (speeding > 40) {
       status = `reckless driving`;
    }

    if (speeding > 0) {
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');