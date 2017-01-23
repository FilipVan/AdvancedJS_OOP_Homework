
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    whoAreYou() {
        return `my name is ${this.name} and i am working in the department of ${this.department}`
    }
};


class Manager extends Employee {
    constructor(name, department, employees) {
        super(name, "general")
        this.employees = [];
    }

    fireEmployees(firedEmployee) {
        this.employees = this.employees.filter(x => x.name != firedEmployee)
        return this.employees  
    }
    
    // longer version
        // let arg = [];
        // for (let i = 0; i < this.employees.length; i++) {
        //     if (this.employees[i].name != firedEmployee) {
        //         arg.push(this.employees[i])
        //     }
        // }
        // this.employees = arg;
        // return this.employees;
    


let Zoki = new Employee("Zoki", "IT");
let Neno = new Employee("Neno", "Director");
let filip = new Employee("Filip", "Web Development");
let leo = new Employee("Leo", "Web Development");
let Stefan = new Manager("Stefan");
Stefan.employees.push(filip, leo, Neno, Zoki);
Stefan.fireEmployees("Zoki");


