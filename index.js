// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'employeelist_db'
  },
  console.log(`Connected to the employeelist_db database.`)
);

connection.connect((err) => {
  if (err) throw err;

  runSearch();
});

// 
function runSearch() {
  inquirer
    .prompt({
      name: "viewSelection",
      type: "list",
      message: "What would you like to do?",
      choices:
        [
          "id",
          "first_name",
          "last_name",
          "role_id",
          "manager_id",
          "title",
          "salary",
          "department_id",
          "department_name",
        ]
    })



}

// Query database
db.query('SELECT * FROM employee', function (err, results) {
  console.table(results);
});
