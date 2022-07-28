const inquirer = require('inquirer');
const cTable = require('console.table');

// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);

// // prints
// name  age
// ----  ---
// foo   10
// bar   20

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
            console.log("You have selected to view all departments")
            //console.table([

            //{

            // }
            //])
        } else if (ans.starter === 'View all roles') {
            console.log("You have selected to view all roles")
        } else if (ans.starter === 'View all employees') {
            console.log("You have selected to view all employees")
        } else if (ans.starter === 'Add a department') {
            console.log("You have selected to add a department")
        } else if (ans.starter === 'Add a role') {
            console.log("You have selected to add a role")
        } else if (ans.starter === 'Add an employee') {
            console.log("You have selected to add an employee")
        } else if (ans.starter === 'Update an employee') {
            console.log("You have selected to update an employee")
        } else {
            console.log("You have selected to quit.");
            //     internQuestions()

        }

    })
}
initialQuestions()