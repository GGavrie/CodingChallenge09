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


// Task 2 - Creating Manager Class
function Manager(name, id, department, salary, teamSize) {
    Employee.call(this, name, id, department, salary); //  Employee properties
    this.teamSize = teamSize; // Number of employees 

    // Overriding getDetails to include team size
    this.getDetails = function() {
        return "Manager: " + this.name + ", ID: " + this.id + ", Department: " + this.department + ", Salary: $" + this.salary + ", Team Size: " + this.teamSize;
    };

    // Method to calculate bonus (10% of annual salary)
    this.calculateBonus = function() {
        return this.calculateAnnualSalary() * 0.10;
    };
}