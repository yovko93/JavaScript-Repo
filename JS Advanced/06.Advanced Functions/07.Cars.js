function solve(commands) {
    let objects = {};

    for (const command of commands) {
        if (command.includes('create') && command.includes('inherit')) {
            let name = command.split(' ')[1];
            let parent = command.split(' ')[3];
            let obj = Object.create(objects[parent]);
            objects[name] = obj;
        } else if (command.includes('create')) {
            let name = command.split(' ')[1];
            objects[name] = {};
        } else if (command.includes('set')) {
            let [set, name, key, value] = command.split(' ');
            objects[name][key] = value;
        } else {
            let name = command.split(' ')[1];
            let keys = [...Object.keys(objects[name])];
            let current = objects[name];
            while (true) {
                let obj = Object.getPrototypeOf(current);
                if (obj === null) {
                    break;
                }

                let newKeys = Object.keys(obj);
                if (newKeys.length === 0) {
                    break;
                }
                keys = [...keys, ...newKeys];
                current = obj;
            }
            keys = keys.map(data => {
                return `${data}:${objects[name][data]}`;
            });
            console.log(keys.join(', '));
        }
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);

    // expected 'color:red\nmodel:new, color:red\n' 
    // to equal 'color:red\nmodel:new,color:red\n'