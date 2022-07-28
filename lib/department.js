const inquirer = require('inquirer');
// TODO: Write code to define and export department

class Department {
    constructor(name = 'Department') {
        this.name = name
    }

    getName() {
        return this.name;
    }
}
module.exports = Department