const mysql = require("mysql2");
const menu = require("./lib/menu");
// Using the 'figlet' Node.js library to create a custom banner using ASCII art text
const figlet = require("figlet");

// DB Connection Settings
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password", 
  database: "employee_tracker_db",
});

// Establish the database connection
db.connect((err) => {
  // Throwing an error message if unsuccessful
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  
  // Printing the welcome banner upon application launch
  figlet(` \n Employee Tracker Application`, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
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