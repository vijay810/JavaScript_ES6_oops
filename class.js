//Example:-1
class Employee{
    constructor(name, age){ 
        this.n = name;
        this.a = age;
    }
	//public variable
    getname(){
        //console.log(this.n);
        //console.log(this.a);
        return this.n;
        
    }
}
let name="vijay", age=23;
let empObj = new Employee(name, age);
empObj.getname();

output:-
'vijay'



//Example:3

class Employee{
    constructor(name, age){ 
        this.n = name;
        this.a = age;
    }
    getname(){
	//printing the objects
         //  return this.n;
        //return {name:this.n, age: this.a};
        return [this.n, this.a];
        
    }
}
let name="vijay", age=23;
let empObj = new Employee(name, age);
empObj.getname();
VM920:7 vijay
VM920:8 23

//v.v.imp
//Example:4 to convert public to private variable using hash(#). 
class Employee{
    #a;//private variable
    constructor(name, age){ 
        this.n = name;
        this.#a = age;
    }
             // it is a private variable:-(   #getname()  )
            //private variable should not be a access  directly from outside the class
    #getname(){
        //console.log(this.n);
        //console.log(this.a);
        //return {name:this.n, age: this.a};
        return [this.n, this.#a];
        
    }
        //public variable
    getDetails(){   
        return this.#getname();
    }
}
let name="vijay", age=23;
let empObj = new Employee(name, age);
empObj.n;
'vijay'

empObj.a     
undefined	           //becouse it is a private variable(#a means age).

empObj.getDetails()     //to access the private variable to public variable.
(2) ['vijay', 23]



//Example :-5
class Employee{
    #a;     //private variable - you can declare a hash(#) symbole then it is colled private.
    constructor(name, age){ 
        this.n = name;
        this.#a = age;
    }
        // it is a private variable:-(   #getname()  )
	//private variable should not be a access  directly from outside the class
    #getname(){
        //console.log(this.n);
        //console.log(this.a);
        //return {name:this.n, age: this.a};
        return [this.n, this.#a];
        
    }
        //public
    getDetails(){   
        return this.#getname()
    }
}
let name="vijay", age=23;
let empObj = new Employee(name, age);
empObj.getDetails();

(2) ['vijay', 23]




//Q.getname getmethods, update variable

//Home work:-1
	//	Q.getname getmethos, update the properties. 

class student{
    constructor(regno, name, age){
        this.r = regno;
        this.n = name;
        this.a = age
    }
    getName(){
        return [this.r, this.n, this.a];
    }
    setName(r,n,a){
        this.r = regno;
        this.n = name;
        this.a = age
    }
}
let regno = 001, name = "vijay", age = 23;
let student1 = new student(regno, name, age);
student1.getName();

//OUTPUT:-
(3) [1, 'vijay', 23]

let student2 = {regno:2, name:"kumar", age:24};
student2;

//OUTPUT:-
{regno: 2, name: 'kumar', age: 24}

//HOME WORK:-2
	//	Q.getname, getmethos, update the properties. 
class student{
    constructor(regno, name, age){
        this.r = regno;
        this.n = name;
        this.a = age
    }
    getName(){
        return [this.r, this.n, this.a];
    }
    setName(n){
        this.n=name;
    }
}
let regno = 001, name = "vijay", age = 23;
let student1 = new student(regno, name, age);
student1.getName();

let student2 = {name:"kumar"};
student2;
    
{name: 'kumar'}


	//Q.private variable
class student{
    #n; //private variable
    constructor(regno, name, age){
        this.r = regno;
        this.#n = name;
        this.a = age
    }
    #getName(){
        return [this.r, this.#n, this.a];
    }
    setName(r,n,a){
        this.r = regno;
        this.#n = name;
        this.a = age
    }
}
let regno = 001, name = "vijay", age = 23;
let student1 = new student(regno, name, age);

student1.n;
undefined



class student{
    #n; //private variable
    constructor(regno, name, age){
        this.r = regno;
        this.#n = name;
        this.a = age
    }
    #getName(){
        return [this.r, this.#n, this.a];
    }
    setName(r,n,a){
        this.r = regno;
        this.#n = name;
        this.a = age
    }
    getdetails(){
         return this.#getName();
    }
            
}
let regno = 001, name = "vijay", age = 23;
let student1 = new student(regno, name, age);
//student1.a;
student1.getdetails();


(3) [1, 'vijay', 23]
let student2 = {name:"kumar"};
student2;

{name: 'kumar'}



