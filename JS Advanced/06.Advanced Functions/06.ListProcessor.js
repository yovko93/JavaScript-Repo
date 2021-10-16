function solve(arr) {
    let result = [];

    for (const element of arr) {
        let command = element.split(' ').filter(x => x != '');

        switch (command[0]) {
            case 'add': result.push(command[1]); break;
            case 'remove': result = result.filter(x => x != command[1]); break;
            case 'print': console.log(result.join(',')); break;
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

// // second way
// function solution(input) {
//     let myObj = {
//         data: [],
//         add(input) {
//             this.data.push(input);
//         },
//         remove(input) {
//             this.data = this.data.filter(e => e != input);
//         },
//         print() {
//             console.log(this.data.join(','));
//         }
//     }

//     input.forEach(line => {
//         let [key, value] = line.split(' ');
//         myObj[key](value);
//     })
// }