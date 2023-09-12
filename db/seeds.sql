-- Inserting sample departments
INSERT INTO departments (id, name) VALUES
  (1, 'Sales'),
  (2, 'Engineering'),
  (3, 'Finance'),
  (4, 'Legal');

-- Inserting sample roles
INSERT INTO roles (title, salary, department_id) VALUES
  ('HR Manager', 80000, 1),
  ('Software Engineer', 160000, 2),
  ('Sales Representative', 100000, 3),
  ('Marketing Specialist', 120000, 4);

-- Inserting sample employees
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Mike', 'Johnson', 3, 1),
    ('Emily', 'Williams', 2, 2),
    ('David', 'Brown', 1, 2),
    ('Susan', 'Davis', 3, 1);