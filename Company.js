class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee = function (employee) {
        const e = this.employees.find(({id}) => id === employee.id);
        if (!e) {
            this._employees.push(employee);
        }
        return !e;
    }

    removeEmployee = function (id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }

    get size() {
        return this.employees.length;
    }

    minAge =  () => {
        return this.size === 0 ? 0 : Math.min(...this._employees.map((employee) => employee.age));
    }

    maxAge = () => {
        return this.size === 0 ? 0 : Math.max(...this._employees.map((employee) => employee.age));
    }

    averageAge = () => {
        const sumAges = this._employees.reduce((sum,employee) => sum + employee.age, 0);
        return this.size === 0 ? 0 : sumAges / this.size;
    }

    totalSalary = function () {
        return this._employees.reduce((sum, employee) => sum + Number(employee._salary), 0);
    }
    averageSalary = () => {
        return this.size === 0 ? 0 : (this.totalSalary() / Number(this.size));
    }
    totalPersons = () => {
        return this.size;
    }
    printFullStats = () => {
        return [
            `Min age: ${this.minAge()}`,
            `Max age: ${this.maxAge()}`,
            `Average age: ${this.averageAge().toFixed(2)}`,
            `Total Salary: ${this.totalSalary().toFixed(2)}₪`,
            `Average Salary: ${this.averageSalary().toFixed(2)}₪`,
            `Total persons in company: ${this.totalPersons()}`
        ]
    }
}