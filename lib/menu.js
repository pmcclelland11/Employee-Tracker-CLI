const inquirer = require("inquirer");

function menu(db) {
    inquirer
        .prompt({
            name: "menu",
            type: "list",
            message: "Select a choice:",
            choices: [
                "View all employees",
                "Add employee",
                "Update employee role",
                "View all roles",
                "Add role",
                "View all departments",
                "Add department",
                "Quit",
            ],
        })
        .then((answers) => {
            switch (answers.menu) {
                case "View all employees":
                    viewAllEmployees(db);
                    break;
                case "Add employee":
                    addEmployee(db);
                    break;
                case "Update employee role":
                    updateEmployeeRole(db);
                    break;
                case "View all roles":
                    viewAllRoles(db);
                    break;
                case "Add role":
                    addRole(db);
                    break;
                case "View all departments":
                    viewAllDepartments(db);
                    break;
                case "Add department":
                    addDepartment(db);
                    break;
                case "Quit":
                    console.log("Goodbye!");
                    process.exit();
                default:
                    console.log("Invalid choice.");
                    menu(db);
            }
        });
}

// Query Functions
function viewAllEmployees(db) {
    const query = `SELECT * FROM employees`;
    db.query(query, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
        menu(db);
    });
}

function addEmployee(db) {
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "Enter the employee's first name:",
            },
            {
                name: "last_name",
                type: "input",
                message: "Enter the employee's last name:",
            },
            {
                name: "role_id",
                type: "input",
                message: "Enter the employee's role ID:",
            },
            {
                name: "manager_id",
                type: "input",
                message: "Enter the employee's manager's ID (if applicable, or press Enter for none):",
            },
        ])
        .then((answers) => {
            const { first_name, last_name, role_id, manager_id } = answers;
            const query = `
                INSERT INTO employees (first_name, last_name, role_id, manager_id)
                VALUES (?, ?, ?, ?);
            `;

            db.query(query, [first_name, last_name, role_id, manager_id], (err, res) => {
                if (err) {
                    console.error("Error adding employee:", err);
                } else {
                    console.log("Employee added successfully.");
                }
                menu(db);
            });
        });
}

function updateEmployeeRole(db) {
    inquirer
        .prompt([
            {
                name: "employee_id",
                type: "input",
                message: "Enter the ID of the employee whose role you want to update:",
            },
            {
                name: "new_role_id",
                type: "input",
                message: "Enter the new role ID for the employee:",
            },
        ])
        .then((answers) => {
            const { employee_id, new_role_id } = answers;
            const query = `
                UPDATE employees
                SET role_id = ?
                WHERE id = ?;
            `;

            db.query(query, [new_role_id, employee_id], (err, res) => {
                if (err) {
                    console.error("Error updating employee role:", err);
                } else if (res.affectedRows === 0) {
                    console.log("Employee not found with that ID.");
                } else {
                    console.log("Employee role updated successfully.");
                }
                menu(db);
            });
        });
}

function viewAllRoles(db) {
    const query = `SELECT * FROM roles`;
    db.query(query, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
        menu(db);
    });
}

function addRole(db) {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "Enter the role title:",
            },
            {
                name: "salary",
                type: "input",
                message: "Enter the role salary:",
            },
            {
                name: "department_id",
                type: "input",
                message: "Enter the department ID for this role:",
            },
        ])
        .then((answers) => {
            const { title, salary, department_id } = answers;
            const query = `
                INSERT INTO roles (title, salary, department_id)
                VALUES (?, ?, ?);
            `;

            db.query(query, [title, salary, department_id], (err, res) => {
                if (err) {
                    console.error("Error adding role:", err);
                } else {
                    console.log("Role added successfully.");
                }
                menu(db);
            });
        });
}

function viewAllDepartments(db) {
    const query = `SELECT * FROM departments`;
    db.query(query, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
        menu(db);
    });
}

function addDepartment(db) {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "Enter the department name:",
            },
        ])
        .then((answers) => {
            const { name } = answers;
            const query = `
                INSERT INTO departments (name)
                VALUES (?);
            `;

            db.query(query, [name], (err, res) => {
                if (err) {
                    console.error("Error adding department:", err);
                } else {
                    console.log("Department added successfully.");
                }
                menu(db);
            });
        });
}








module.exports = menu;