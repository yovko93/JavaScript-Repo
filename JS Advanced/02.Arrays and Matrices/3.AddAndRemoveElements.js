function addRemove(arr) {
    const result = [];

    let currentNum = 0;

    for (let command of arr) {
        currentNum++;
        if (command == 'add') {
            result.push(currentNum);
        } else if (command == 'remove') {
            result.pop(currentNum);
        }
    }

    return result.length != 0 ? result.join('\n') : 'Empty'
}

console.log(addRemove(['add', 
'add', 
'remove', 
'add', 
'add']
));