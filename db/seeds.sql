INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 4),
("Salesperson", 80000, 4),
("Lead Engineer", 150000, 1),
("Software Engineer", 120000, 1),
("Account Manager", 160000, 2),
("Accountant", 125000, 2),
("Legal Team Lead", 250000, 3),
("Lawyer", 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 3, NULL),
    ("Mike", "Chan", 7, 1),
    ("Ashley", "Rodriguez", 6, NULL),
    ("Kevin", "Tupik", 5, 3),
    ("Kunal", "Singh", 2, 4),
    ("Malia", "Brown", 1, NULL),
    ("Sarah", "Lourd", 4, 2),
    ("Tom", "Allen", 8, NULL);

DESCRIBE department;
DESCRIBE role;