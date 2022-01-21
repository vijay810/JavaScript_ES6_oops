//Inheritance:-
//:- implementation of inheritance by using the extends and super keyword.
//:- Inheritance is the ability to create new entities from an existing one. 
//:- The class that is extended for creating newer classes is referred to as superclass/parent class,
//:- while the newly created classes are called subclass/child class.

//:- A class can be inherited from another class by using the 'extends' keyword.
//:- Except for the constructors from the parent class, child class inherits all properties and methods.


class Employee{
    #a;     //private variable - you can declare a hash(#) symbole then it is colled private.
    constructor(name, age){ 
        this.n = name;
        this.#a = age;
    }
    get empName(){
        return this.name;
    }
    set empName(uName){
        this.n = uName;
    }
    // it is a private variable:-(   #getname()  )
	  //private variable should not be a access  directly from outside the class
    #getname(){
        //return {name:this.n, age: this.a};
        //or  
        return [this.n, this.#a];//this keyword always pointing to the own self
        
    }
    //public
    getDetails(){   
        return this.#getname()
    }
}
let name="vijay", age=23;
let empObj = new Employee(name, age);
empObj.n;
'vijay'

empObj.getDetails();
(2) ['vijay', 23]
empObj.getDetails();
empObj.empName;
undefined
empObj.getDetails();
empObj.empName
empObj.empName = "Rob"
'Rob'


class Coder extends Employee{
    	constructor(n,a,skills, hobbies, yExp){
    		  super(n, a);
    		  this.myskills = skills;
    		  this.myhobbies = hobbies;
    		  this.myYearOfExp = yExp;
	    }
	    get myPersonalSkills(){
    		  return `my skills are ${this.myskills}`;
	    }
	    set myPersonalHobbies(arrHobbies){
    		  this.myhobbies = arrHobbies;
    		  console.log(this);
	    }
}
let skills=['drawing','art','pencil sketch'];
     hobbies=['swimming','singing','dancing'];
     exp=5,name="vijay",age=23;
let myPersonalObj = new Coder(name, age,skills,hobbies,exp);
     myPersonalObj.myhobbies;

  
(3) ['swimming', 'singing', 'dancing']
    myPersonalObj.myPersonalHobbies=['drawing'];
    myPersonalObj.myhobbies;


Coder {n: 'vijay', myskills: Array(3), myhobbies: Array(1), #getname: ƒ, #a: 23, …}
['drawing'].

    myPersonalObj.n;
'vijay'
    myPersonalObj.a;
undefined    // because it is a private variable. 
