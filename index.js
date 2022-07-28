const inquirer = require('inquirer');
const cTable = require('console.table');
const express = require('express');
const mysql = require('mysql2');
const app = express()
const Department = require('./lib/Department');


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
        db.query("INSERT INTO department(name) VALUES(?)", [ans.departmentName], function (err, results) {
            initialQuestions()
        })
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
            message: "Which department does the role belong to? Engineering -1, Finance-2, Legal-3, Sales-4",
            choices: ["1", "2", "3", "4"],
            name: "roleDepartment"
        }
    ]).then(ans => {
        db.query("INSERT INTO role (title, salary, department_id) VALUES(?,?,?)", [ans.roleName, ans.roleSalary, ans.roleDepartment], function (err, results) {
            initialQuestions()
        })
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
            message: "What is the employee's role? Sales Lead-1, Salesperson-2, Lead Engineer-3, Software Engineer-4, Account Manager-5, Accountant-6, Legal Team Lead-7, Lawyer-8",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8"],
            name: "employeeRole"
        },
        {
            type: "list",
            message: "Who is the employee's manager? John Doe -1, Mike Chan-2, Ashley Rodriguez-3, Kevin Tupik-4, Kunak Singh-5, Malia Brown-6, Sarah Lourd-7, Tom Allen-8",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8"],
            name: "employeeManager"
        }
    ]).then(ans => {
        db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)", [ans.firstName, ans.lastName, ans.employeeRole, ans.employeeManager], function (err, results) {
            initialQuestions()
        })
    })

}

const updateEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Which employee's role do you want to update? John Doe -1, Mike Chan-2, Ashley Rodriguez-3, Kevin Tupik-4, Kunal Singh-5, Malia Brown-6, Sarah Lourd-7, Tom Allen-8",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8"],
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

 //     // db.query("UPDATE employee SET role_id [ans.updatedRole] WHERE [ans.updatedEmployee]"),function (err, results) {
    //         initialQuestions()
    //     }
