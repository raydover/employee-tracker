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

// Requires SHOWN IN CLASS
// const mysql = require('mysql2');
// const inquirer = require('inquirer');
// require('console.table');

// Import and require mysql2
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');

// OPTION SHOWN IN CLASS
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'classlist_db'
//   },
//   console.log(`Connected to the classlist_db database.`)
// );

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeelist_db'
  },
  console.log(`Connected to the employeelist_db database.`)
);

// Funtion view by departments, roles, employees
const fn = {

  // OPTION SHOWN IN CLASS
  // const showAllStudents = () => {
  //   db.query('SELECT * FROM students', function (err, results) {
  //     if (err) return console.error(err);
  //     console.table(results);
  //     return init();
  //   });
  // };

  // View Deparments Table
  viewDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
      if (err) return console.error(err);
      console.table(results);
      return init();
    });
  },

  // OPTION SHOWN IN CLASS
  // const showEnrolledStudents = () => {
  //   db.query('SELECT * FROM students WHERE enrolled = 1', function (err, results) {
  //     if (err) return console.error(err);
  //     console.table(results);
  //     return init();
  //   });
  // };

  // View Roles Table
  viewRoles() {
    db.query('SELECT * FROM role', function (err, results) {
      if (err) return console.error(err);
      console.table(results);
      return init();
    });
  },

  // OPTION SHOWN IN CLASS
  // const showUnenrolledStudents = () => {
  //   db.query('SELECT * FROM students WHERE enrolled = 0', function (err, results) {
  //     if (err) return console.error(err);
  //     console.table(results);
  //     return init();
  //   });
  // };

  // View Employee Table
  viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
      if (err) return console.error(err);
      console.table(results);
      return init();
    });
  },

// Prompt to add department name
  addDepartment() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'addDepartmentName',
        message: 'Enter a Department Name:'
      }
    ]).then(({ addDepartment }) => {
      db.query('INSERT INTO department (name) VALUES (${addDepartment})');
      return init();
    });
  },

  // Prompt to add role and what to input add title, salary, dept id
  addRole() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'addRoleTitle',
        message: 'Add new Role Title:'
      },
      {
        type: 'input',
        name: 'addRoleSalary',
        message: 'Add new Role Salary:'
      },
      {
        type: 'input',
        name: 'addRoleDepartmentId',
        message: 'Add new Role Department Id:'
      },
    ]).then(({ addRole }) => {
      db.query('INSERT INTO role (name) VALUES (${addRole})');
      return init();
    });
  },

  // Prompt to add employee and what to input add first name, last name, role id, manager id
  addEmployee() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'addEmployeefirstName',
        message: 'Enter Employee First Name:'
      }
      {
        type: 'input',
        name: 'addEmployeelastName',
        message: 'Enter Employee Last Name:'
      },
      {
        type: 'input',
        name: 'addEmployeeRoleId',
        message: 'Enter Employee Role Id:'
      },
      {
        type: 'input',
        name: 'addEmployeeManagerId',
        message: 'Enter Employee Manager Id:'
      },
    ]).then(({ addEmployee }) => {
      db.query('INSERT INTO role (name) VALUES (${addEmployee})');
      return init();
    });
  },

  updateEmployeeRole() {
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

// OPTION SHOWN IN CLASS
// const init = () => {
//   inquirer.prompt([
//     {
//       type: 'rawlist',
//       name: 'query',
//       message: 'What option would you like to select?',
//       choices: [
//         'Show All Students',
//         'Show Enrolled Students',
//         'Show Unenrolled Students',
//       ]
//     }

// Funtion to initialze
const init = () => {
  inquirer.prompt([
    {
      type: 'rawlist',
      name: 'query',
      message: "Select from the options below:",
      choices: [
        'View all Departments',
        'View all Roles',
        'View all Employess',
        'Add a Department',
        'Add a Role',
        'Add a Employee',
        'Update an Employee Role',
        'Exit',
      ],
    },

    // OPTION SHOWN IN CLASS
    //   ]).then((answers) => {
    //     switch (answers.query) {
    //       case 'Show All Students': {
    //         showAllStudents();
    //         break;
    //       }
    //       case 'Show Enrolled Students': {
    //         showEnrolledStudents();
    //         break;
    //       }
    //       case 'Show Unenrolled Students': {
    //         showUnenrolledStudents();
    //         break;
    //       }
    //     }
    //   });
    // };

    // init();
  ]).then((answers) => {
    switch (answers.query) {
      case 'View all Departments': {
        viewDepartments();
        break;
      }
      case 'View all Roles': {
        viewRoles();
        break;
      }
      case 'View all Employees': {
        viewEmployess();
        break;
      }
      case 'Add a Department': {
        addDepartment();
        break;
      }
      case 'Add a Role': {
        addRole();
        break;
      }
      case 'Add a Employees': {
        addEmployee();
        break;
      }
      case 'Update an Employee Role': {
        updateRole();
        break;
      }
      default: {
        console.log('exiting');
        process.exit();
      }
    }
  });
};

init();













