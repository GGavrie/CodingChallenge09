// Task 1 - Creating Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // new employee
console.log(emp1.getDetails()); // print employee details


// Task 2 - Creating Manager Class
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); // call employee constructor
        this.teamSize = teamSize; // Manager's team size
    }

    // Overriding getDetails to include team size
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    // Method to calculate bonus (10% of annual salary)
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.10;
    }
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); // Expected output: Manager details
console.log(mgr1.calculateBonus()); // Expected output: 9600