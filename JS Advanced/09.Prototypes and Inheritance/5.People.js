// 100/100 JUDGE
function people() {
    class Employee {
        constructor(name, age) {
            if (new.target == Employee) {
                throw new Error("Cannot make instance of abstract class Employee.");
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(`${this.name} ` + currentTask);
            this.tasks.push(currentTask);
        }

        getSalary() {
            return this.salary;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push("is working on a simple task.");
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push("is working on a complicated task.");
            this.tasks.push("is taking time off work.");
            this.tasks.push("is supervising junior workers.");
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push("scheduled a meeting.");
            this.tasks.push("is preparing a quarterly report.");
        }

        getSalary() {
            return super.getSalary() + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}


// 40/100
function solve() {
    const TASKS = {
        JUNIOR: [' is working on simple task.'],
        SENIOR: [
            ' is working on a complicated task.',
            ' is taking time off work.',
            ' is supervising junior workers.'],
        MANAGER: [
            ' scheduled a meeting.',
            ' is preparing a quarterly report.']
    };

    class Employee {
        constructor(name, age, tasks) {
            if (new.target === Employee) {
                throw new Error("Cannot instantiate directly.");
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = tasks;
            this._index = 0;
        }

        work() {
            if (this._index === this.tasks.length) {
                this._index = 0;
            }
            console.log(this.name + this.tasks[this._index]);

            this._index++;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }

        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.JUNIOR);
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.SENIOR);
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.MANAGER);
            this.dividend = 0;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
}