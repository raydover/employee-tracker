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

// Query database
db.query('SELECT * FROM employee', function (err, results) {
  console.table(results);
});
