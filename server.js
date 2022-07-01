// Import and require mysql2
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

// View Deparments Table
const viewDepartments = () => {
  db.query('SELECT * FROM department', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    init();
  });
};

// View Roles Table
const viewRoles = () => {
  db.query('SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    init();
  });
};

// View Employee Table
const viewEmployees = () => {
  db.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role  ON employee.role_id = role.id LEFT JOIN department  ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id', function (err, results) {
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
      name: 'departmentName',
      message: 'Add a new Department Name:'
    },
  ]).then((answers) => {
    db.query('INSERT INTO department SET ?',
      {
        name: answers.departmentName
      })
    init();
  });
};

// Prompt to add role and what to input add title, salary, dept id
const addRole = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'roleTitle',
      message: 'Add new Role Title:'
    },
    {
      type: 'input',
      name: 'roleSalary',
      message: 'Add new Role Salary:'
    },
    {
      type: 'input',
      name: 'roleDepartmentId',
      message: 'Add a new Role Department Id:'
    }
  ]).then((answers) => {
    db.query('INSERT INTO role SET ?',
      {
        title: answers.roleTitle,
        salary: answers.roleSalary,
        department_id: answers.roleDepartmentId
      })
    init();
  });
};

// Prompt to add employee and what to input add first name, last name, role id, manager id
const addEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'empFirstName',
      message: 'Add Employee First Name:'
    },
    {
      type: 'input',
      name: 'emplastName',
      message: 'Add Employee Last Name:'
    },
    {
      type: 'input',
      name: 'empRoleId',
      message: 'Add Employee Role Id:'
    },
    {
      type: 'input',
      name: 'empManagerId',
      message: 'Add an Employee Manager Id:'
    }
  ]).then((answers) => {
    db.query('INSERT INTO employee SET ?',
      {
        first_name: answers.empFirstName,
        last_name: answers.emplastName,
        role_id: answers.empRoleId,
        manager_id: answers.empManagerId
      })
    init();
  });
};

// Prompt to update employee role and what to input update employee role
const updateEmployeeRole = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'updateEmployee',
      message: 'Enter Employee ID to Update the Role:'
    },
    {
      type: 'input',
      name: 'updateEmployeeRole',
      message: 'Enter to Update the Employee Role:'
    }
  ]).then((answers) => {
    db.query('UPDATE employee SET ? WHERE ?',
    {
      id: answers.updateEmployee,
      role_id: answers.updateEmpRole
    })
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
        'View all Employees',
        'Add a Department',
        'Add a Role',
        'Add an Employee',
        'Update an Employee Role',
        'Exit'
      ],
    }

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
      case 'Add an Employee': {
        addEmployee();
        break;
      }
      case 'Update an Employee Role': {
        updateEmployeeRole();
        break;
      }
      case 'Exit': {
        console.log('Exiting')
        exit();
        break;
      }
    }
  });
};

init();













