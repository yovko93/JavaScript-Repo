class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }

    add(number) {
        this.list.push(number);
        this.size = this.list.length;
        this.list.sort((a, b) => a - b);
    };
    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error('Index is out of range');
        }

        this.list[index] = null;
        this.list = this.list.filter((el) => el != null);
        this.size = this.list.length;
    };
    get(index) {
        if (index > this.list.length || index < 0) {
            throw new Error('Index is out of range');
        }
        
        return this.list[index];
    };
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
