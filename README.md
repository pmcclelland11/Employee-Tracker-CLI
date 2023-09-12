# UC Berkeley Coding Bootcamp - Module 12 Challenge
## Employee-Tracker-CLI
This employee tracker application is a CLI designed for business owners to efficiently organize and manage their company's departments, roles, and employees. With a user-friendly interface, this application provides essential functionalities for handling workforce data.

## Table of Contents 
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Support](#support)
- [Acknowledgements](#acknowledgements)
- [Authors](#authors)
- [Video Walkthrough](#video-walkthrough)

## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Installation
To install and run this project, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project's root directory.
3. Run the following command to install the required dependencies: 'npm i'
4. Set up your MySQL database by running the provided `schema.sql` and `seeds.sql` scripts.

## Usage 
This project is intended for education purposes only.

## Features
- Utilizes JavaScript and MySQL for database management.
- Employs Inquirer for a user-friendly command-line interface.
- Enhances user experience with Figlet, a Node.js library for ASCII art text.
- Utilizes cli-table3, a Node.js library, for generating neatly formatted tables in the CLI.

## Contributing
No others have contributed to this repository. 

## Support
N/A

## Acknowledgements
N/A

## Author
Patrick McClelland, UC Berkeley Bootcamp Student

## Video Walkthrough
ADD LINK HERE