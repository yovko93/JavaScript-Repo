function solve(input) {
 
    console.log(input.split(/[\W]+/)
    .filter(w => w != '')
    .map(w => w.toUpperCase())
    .join(', '));
 
}

solve('Hi, how are you?');