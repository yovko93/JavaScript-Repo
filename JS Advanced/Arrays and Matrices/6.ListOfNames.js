function listOfNames(arr){
    let result = arr
    .sort((a,b) => a.localeCompare(b))
    .map((name, index) => {
       return `${index + 1}.${name}`
    })

    return result.join('\n');
}

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));