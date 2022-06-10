// Create a connection to the database

const mysql = require("mysql");
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cabinet'
});

// open the MySQL connection
db.connect(err => {
  if (err) throw err;
  console.log("Successfully connected to the database.");
});

module.exports = db; 