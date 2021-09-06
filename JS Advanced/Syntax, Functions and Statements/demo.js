function solve(speed, area) {
    let limit = 0;
    let status;
    
    switch (area) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20;  break;
    }

    
}

solve(40, 'city');
solve(21, 'residential');
solve(200, 'motorway');