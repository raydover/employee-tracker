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

// OPTION SHOWN IN CLASS
// const showAllStudents = () => {
//   db.query('SELECT * FROM students', function (err, results) {
//     if (err) return console.error(err);
//     console.table(results);
//     return init();
//   });
// };

// View Deparments Table
const viewDepartments = () => {
  db.query('SELECT * FROM department', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    init();
  });
};

// OPTION SHOWN IN CLASS
// const showEnrolledStudents = () => {
//   db.query('SELECT * FROM students WHERE enrolled = 1', function (err, results) {
//     if (err) return console.error(err);
//     console.table(results);
//     return init();
//   });
// };

// View Roles Table
const viewRoles = () => {
  db.query('SELECT * FROM role', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    init();
  });
};

// OPTION SHOWN IN CLASS
// const showUnenrolledStudents = () => {
//   db.query('SELECT * FROM students WHERE enrolled = 0', function (err, results) {
//     if (err) return console.error(err);
//     console.table(results);
//     return init();
//   });
// };

// View Employee Table
const viewEmployees = () => {
  db.query('SELECT * FROM employee', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    init();
  });
};

// Prompt to add department name
const addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'addDepartmentName',
      message: 'Add a new Department Name:'
    }
  ]).then((answers) => {
    db.query('INSERT INTO department SET ?');
    init();
  });
};

// Prompt to add role and what to input add title, salary, dept id
const addRole = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Add new Role Title:'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Add new Role Salary:'
    },
    {
      type: 'rawlist',
      name: 'department_id',
      message: 'Choose a new Role Department Id:',
      choices:[

      ]
    },
  ]).then((answers) => {
    db.query('INSERT INTO role SET ?');
    init();
  });
}

// Prompt to add employee and what to input add first name, last name, role id, manager id
const addEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Add an Employee First Name:'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Add an Employee Last Name:'
    },
    {
      type: 'rawlist',
      name: 'role_id',
      message: 'Choose an Employee Role Id:',
      choices: [

      ]
    },
    {
      type: 'rawlist',
      name: 'manager_id',
      message: 'Choose from Employee Manager Id:',
      choices: [

      ]
    },
  ]).then((answers) => {
    db.query('INSERT INTO employee SET ?');
    init();
  });
};


// Prompt to update employee role and what to input add title, salary, dept id
const updateEmployeeRole = () => {
  inquirer.prompt([
    {
      type: 'rawlist',
      name: 'updateEmployeeRole',
      message: 'Choose an Employee Role you wish to Update:',
      choices: [

      ]
    }
  ]).then((answers) => {
    db.query('UPDATE employee SET ? WHERE ?');
    init();
  });
};

// Prompt to update employee role and what to input add title, salary, dept id
const exit = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'exit',
      message: 'Bye, Bye, Bye!'
    }
  ])
  process.exit();
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
        'Add an Employee',
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
        viewEmployees();
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
      case 'Add an Employees': {
        addEmployee();
        break;
      }
      case 'Update an Employee Role': {
        updateEmployeeRole();
        break;
      }
      case 'Exit': {
        exit();
        break;
      }
      // default: {
      //   console.log('exiting');
      //   process.exit();
      // }
    }
  });
};


init();













