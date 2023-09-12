const mysql = require("mysql2");
const figlet = require("figlet");
const menu = require("./lib/menu");

// Create a MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password", 
  database: "employee_tracker_db",
});

// Establish the connection
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database.");

  
  figlet(` \n Emploee Tracker `, function (err, data) {
    if (err) {
      console.log("Something went wrong... Try something else.");
      console.dir(err);
      return;
    }
    console.log(data);

    init();
  });
});

function init() {
  menu(db); 
}