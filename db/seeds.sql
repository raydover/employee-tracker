/* Department Table */
USE employee_db;

INSERT INTO department (name)
VALUES 
("Manager"),
("Engineer"),
("Sales"),
("Finance");
    
/* Role Table */
INSERT INTO role (title, salary, department_id)
VALUES 
("Account Manager", 105000, 1),
("Operations Manager", 200000, 1),  
("Software Enginner", 100000, 2), 
("Lead Enginner", 180000, 2),  
("Sales Lead", 150000, 3),  
("Salesperson", 75000, 3),  
("Controller", 125000, 4), 
("Accoutant", 80000, 4); 

/* Employee Table */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("David", "Smith", 1, 1),
("Mark", "Jones", 2, null),
("Shawn", "Paul", 3, 2),
("Ray", "Dover", 4, null),
("Sara", "Kim", 5, 3),
("Michelle", "Park", 6, 3),
("Peter", "Hughs", 7, null),
("Gil", "Lockhart", 8, 4);
    


       

    
       
