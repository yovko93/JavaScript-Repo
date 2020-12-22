function findArea(type, param1, param2) {
    param1 = Number(param1);
    let area;

    if (type == "square") {
        area = param1 * param1;
    } else if (type == "rectangle"){
        param2 = Number(param2);
        area = param1 * param2;
    } else if (type == "circle") {
        area = Math.PI * Math.pow(param1, 2);
    } else if(type == "triangle"){
        area = (param1 * param2) / 2;
    }
    
    console.log(area.toFixed(3));
}

findArea("triangle", "5", "10");