class Company {
    constructor(departments = []) {
        this.departments = departments;
    }

    addEmployee(username, salary, position, department) {
        if (!username || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!')
        }

        let newEmployee = {
            username,
            salary: Number(salary),
            position,
        };

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push(newEmployee);

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let department = '';
        let maxSalary = 0;

        Object.entries(this.departments).forEach(([key, value]) => {
            let salary = 0;
            value.forEach(person => {
                salary += person.salary;
            });

            salary /= value.length;
            if (salary > maxSalary) {
                department = key;
                maxSalary = salary;
            }
        });

        if (department !== '') {
            let result = [];
            result.push(`Best Department is: ${department}`);result.push(`Average salary: ${maxSalary.toFixed(2)}`);

            Object.values(this.departments[department])
                .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
                .forEach(el => {
                    let employee = `${el.username} ${el.salary} ${el.position}`;
                    
                    result.push(employee);
                });

            return result.join('\n');
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
