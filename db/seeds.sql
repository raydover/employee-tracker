/* Department Table */
INSERT INTO department (id, name)
VALUES ("1", "Manager"),
VALUES ("2", "Engineer"),
VALUES ("3", "Sales"),
VALUES ("4", "Finance"),
    
/* Role Table */
INSERT INTO role (id, title, salary, department_id)
VALUES ("1", "Account Manager", "105000", "11"),
VALUES ("2", "Operations Manager", "200000", "11"),  
VALUES ("3", "Software Enginner", "100000", "22"), 
VALUES ("4", "Lead Enginner", "180000", "22"),  
VALUES ("5", "Sales Lead", "150000", "33"),  
VALUES ("6", "Salesperson", "75000", "33"),  
VALUES ("7", "Controller", "125000", "44"), 
VALUES ("8", "Accoutant", "80000", "44"),  

/* Employee Table */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("1", "David", "Smith", "1", "1"),
VALUES ("2", "Mark", "Jones", "2", null),
VALUES ("3", "Shawn", "Paul", "3", "2"),
VALUES ("4", "Ray", "Dover", "4", null),
VALUES ("5", "Sara", "Kim", "5", "3"),
VALUES ("6", "Michelle", "Park", "6", "3"),
VALUES ("7", "Peter", "Hughs", "7", null),
VALUES ("8", "Gil", "Lockhart", "8", "4"),
    


       

    
       
