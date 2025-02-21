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



// Task 3 - Creating a class company 
class Company {
    constructor(name) {
        this.name = name; // Company name
        this.employees = []; // List of employees in the company
    };

    addEmployee(employee) {
            this.employees.push(employee);
      
    }

    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails()));
    }
// Task 4 - Calculatin oayroll 
    calculateTotalPayroll() {
        return this.employees.reduce((total, employee) => {
            let annualSalary = employee.calculateAnnualSalary();
            let bonus = 0;
            if (employee instanceof Manager) {
                bonus = employee.calculateBonus();
            }
            return total + annualSalary + bonus;
        }, 0);
    }


// Task 5 - Adding promotion method
promoteToManager(employeeName, teamSize) {
    const employee = this.employees.find(emp => emp.name === employeeName);
    if (employee) {
        const index = this.employees.indexOf(employee);
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
        console.log(`${employeeName} promoted to Manager with team size ${teamSize}.`);
    } else {
        console.log(`Employee ${employeeName} not found.`);
    }
}
}

// Test the functionality
const company = new Company("TechCorp");
company.addEmployee(emp1);// employee 1 
company.addEmployee(mgr1); // manager 1 
company.listEmployees(); 
console.log(`Total Annual Payroll: $${company.calculateTotalPayroll()}`);
company.promoteToManager("Alice Johnson", 3);// promtoe employtee 
company.listEmployees();