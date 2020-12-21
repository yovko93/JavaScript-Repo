function solve(length, width, hight, percent){
    length = Number(length);
    width = Number(width);
    hight = Number(hight);
    percent = Number(percent);

    let volume = length * width * hight;
    let litters = volume * 0.001;
    let percentige = percent * 0.01;

    let littersNeeded = litters * (1 - percentige);

    console.log(littersNeeded);
}

solve("85",
"75",
"47",
"17");