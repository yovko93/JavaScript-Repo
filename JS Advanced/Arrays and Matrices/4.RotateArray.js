function rotateArray(arr, number){
    for (let i = 0; i < number; i++) {
        let currentElement = arr.pop();
        arr.unshift(currentElement);
    }
    
    return arr.join(' ');
}

console.log(rotateArray(['1', 
'2', 
'3', 
'4'], 
2
));