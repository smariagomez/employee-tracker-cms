const inquirer = require('inquirer');
const cTable = require('console.table');
const express = require('express');
const mysql = require('mysql2');
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
);

const initialQuestions = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Select an option from the list below.",
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit'],
            name: "starter"
        }
    ]).then(ans => {
        if (ans.starter === 'View all departments') {
            db.query('SELECT * FROM department', function (err, results) {
                console.table(results);
                initialQuestions()
            });
        } else if (ans.starter === 'View all roles') {
            db.query('SELECT * FROM role', function (err, results) {
                console.table(results);
                initialQuestions()
            });
        } else if (ans.starter === 'View all employees') {
            db.query('SELECT * FROM employee', function (err, results) {
                console.table(results);
                initialQuestions()
            });
        } else if (ans.starter === 'Add a department') {
            addDepartment()

        } else if (ans.starter === 'Add a role') {
            addRole()

        } else if (ans.starter === 'Add an employee') {
            addEmployee()

        } else if (ans.starter === 'Update an employee role') {
            updateEmployee()

        } else if (ans.starter === 'Quit') {
            console.log("You have selected to quit.");
        }

    })
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the dpartment you would like to add?",
            name: "departmentName",
        },
    ]).then(ans => {
        initialQuestions()
    })
}

const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the role?",
            name: "roleName",
        },
        {
            type: "input",
            message: "What is the salary of the role?",
            name: "roleSalary",
        },
        {
            type: "list",
            message: "Which department does the role belong to?",
            choices: ["Engineering", "Finance", "Legal", "Sales"],
            name: "roleDepartment"
        }
    ]).then(ans => {
        initialQuestions()
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "firstName"
        },
        {
            type: "input",
            message: "What is the employee's last name?",
            name: "lastName"
        },
        {
            type: "list",
            message: "What is the employee's role?",
            choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer"],
            name: "employeeRole"
        },
        {
            type: "list",
            message: "Who is the employee's manager?",
            choices: ["John Doe", "Mike Chan", "Ashley Rodriguez", "Kevin Tupik", "Kunak Singh", "Malia Brown", "Sarah Lourd", "Tom Allen"],
            name: "employeeManager"
        }
        ]).then(ans => {
                initialQuestions()
            })

}

const updateEmployee = () => {
    inquirer.prompt ([
        {
            type: "list",
            message: "Which employee's role do you want to update?",
            choices: ["John Doe", "Mike Chan", "Ashely Rodriguez", "Kevin Tupik", "Kunal Singh", "Malia Brown", "Sarah Lourd", "Tom Allen"],
            name: "updatedEmployee"
        },
        {
            type: "list",
            message: "Which role do you want to assign the selected employee?",
            choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer"],
            name: "updatedRole"
        }
    ]).then(ans => {
        initialQuestions()
    })
}


initialQuestions()
