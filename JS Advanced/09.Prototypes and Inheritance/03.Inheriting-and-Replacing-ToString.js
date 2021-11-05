function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email}, ${Object.keys(this).length === 2 ? '' : Object.keys(this)[2]}: ${Object.values(this)[2]})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);

            this.course = course;
        }

        toString() {
            return super.toString();
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);

            this.subject = subject;
        }

        toString() {
            return super.toString();
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}