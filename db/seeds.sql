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
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ("1", "David", "Smith", "Manager", "),
VALUES ("2", "Davy", "Jones", "Manager"," "),
VALUES ("3", "David", "Jones", "Enginner", " "),
VALUES ("4", "David", "Jones", "Enginner", " "),
VALUES ("5", "David", "Jones", "Sales", " "),
VALUES ("6", "David", "Jones", "Sales", ""),
VALUES ("7", "David", "Jones", "Finance", ""),
VALUES ("8", "David", "Jones", "Finance", ""),
    


       

    
       
