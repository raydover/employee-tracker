/* Remoce ID COLUMN */

/* Department Table */
INSERT INTO department (name)
VALUES ("Manager"),
VALUES ("Engineer"),
VALUES ("Sales"),
VALUES ("Finance"),
    
/* Role Table */
INSERT INTO role (title, salary, department_id)
VALUES ("Account Manager", "105000", "11"),
VALUES ("Operations Manager", "200000", "11"),  
VALUES ("Software Enginner", "100000", "22"), 
VALUES ("Lead Enginner", "180000", "22"),  
VALUES ("Sales Lead", "150000", "33"),  
VALUES ("Salesperson", "75000", "33"),  
VALUES ("Controller", "125000", "44"), 
VALUES ("Accoutant", "80000", "44"),  

/* Employee Table */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("David", "Smith", "1", "1"),
VALUES ("Mark", "Jones", "2", null),
VALUES ("Shawn", "Paul", "3", "2"),
VALUES ("Ray", "Dover", "4", null),
VALUES ("Sara", "Kim", "5", "3"),
VALUES ("Michelle", "Park", "6", "3"),
VALUES ("Peter", "Hughs", "7", null),
VALUES ("Gil", "Lockhart", "8", "4"),
    


       

    
       
