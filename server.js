// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database


// Import and require mysql2
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeelist_db'
  }
);

// Funtion to initialze 
const init = () => {
  const choices = [
    { name: 'VIEW all Departments', value: 'viewDepartments' },
    { name: 'VIEW all Employees', value: 'viewEmployees' },
    { name: 'VIEW all Roles', value: 'viewRoles' },
    { name: 'ADD a Department', value: 'addDepartment' },
    { name: 'ADD a Role', value: 'addRole' },
    { name: 'ADD a Employee', value: 'addEmployee' },
    { name: 'UPDATE an Employee Role', value: 'updateEmployeeRole' },
    { name: 'Exit', value: 'exit' },
  ];


  // function 
  inquirer.prompt([
    {
      type: 'rawlist',
      name: 'query',
      message: "Select from the options below:",
      choices,
    }
  ]).then((answers) => fn[answers.query]());
};

// Function view departments, roles, employees
const fn = {
  viewDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
      if (err) return console.error(err);
      console.table(results);
      return init();
    });
  },

  viewRoles() {
    db.query('SELECT * FROM role', function (err, results) {
      if (err) return console.error(err);
      console.table(results);
      return init();
    });
  },

  viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
      if (err) return console.error(err);
      console.table(results);
      return init();
    });
  },

  addDepartment () {
    inquirer.prompt([
      {
        type: 'input',
        name: 'addDepartment',
        message: 'Enter a Department you wish to add:'
      }
    ]).then(({ addDepartment }) => {
      db.query('INSERT INTO department (name) VALUES (${addDepartment})');
      return init();
    });
  },

  addRole() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'addRole',
        message: 'Enter a Role you wish to add:'
      }
    ]).then(({ addRole }) => {
      db.query('INSERT INTO role (name) VALUES (${addRole})');
      return init();
    });
  },

  addEmployee() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'addEmployee',
        message: 'Enter an Employee you wish to add:'
      }
    ]).then(({ addEmployee }) => {
      db.query('INSERT INTO role (name) VALUES (${addEmployee})');
      return init();
    });
  },

  updateEmployee() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'updateEmployee',
        message: 'Enter an Employee you wish to add:'
      }
    ]).then(({ updateEmployee }) => {
      db.query('INSERT INTO role (name) VALUES (${updateEmployee})');
      return init();
    });
  },


  exit() {
    process.exit();
  },
};


init();