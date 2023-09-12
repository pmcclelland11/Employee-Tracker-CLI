-- Inserting sample departments
INSERT INTO departments (id, name) VALUES
  (1, 'Sales'),
  (2, 'Engineering'),
  (3, 'Finance'),
  (4, 'Legal');

-- Inserting sample roles
INSERT INTO roles (title, salary, department_id) VALUES
  ('Sales Manager', 80000, 1),
  ('Lead Sales Representative', 60000, 1),
  ('Sales Representative', 50000, 1),
  ('Engineering Manager', 95000, 2),
  ('Senior Software Engineer', 85000, 2),
  ('Junior Software Engineer', 65000, 2),
  ('Financial Manager', 90000, 3),
  ('Financial Analyst', 70000, 3),
  ('Legal Counsel', 95000, 4),
  ('Legal Assistant', 55000, 4);

-- Inserting sample employees
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Mike', 'Johnson', 3, 2),
    ('Emily', 'Williams', 4, NULL),
    ('David', 'Brown', 5, 4),
    ('Susan', 'Davis', 6, 5),
    ('Michael', 'Wilson', 7, NULL),
    ('Sarah', 'Martinez', 8, 7),
    ('Daniel', 'Taylor', 9, NULL),
    ('Jennifer', 'Harris', 10, 9),
    ('William', 'Clark', 1, 1),
    ('Laura', 'Allen', 2, 11),
    ('Matthew', 'Young', 3, 12),
    ('Karen', 'Lewis', 4, 4),
    ('James', 'Moore', 5, 14),
    ('Linda', 'Walker', 6, 15),
    ('Richard', 'Anderson', 8, 7),
    ('Patricia', 'White', 8, 17),
    ('Robert', 'Jackson', 9, 9),
    ('Maria', 'Hill', 10, 19);