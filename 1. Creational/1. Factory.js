// Dev Class
function Developer(name){
    this.name=name;
    this.type="Developer";
}

// Tester Class
function Tester(name){
    this.name=name;
    this.type="Tester"
}


// Factory Class -- based on params this class will create different objects
function EmployeeFactory(){
    this.create=(name,type)=>{
        switch(type){
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
        }
    }
}

// Function to be shared with other objects
function say(){
    console.log("Hi I am " + this.name + " and I am a " + this.type)
}

// Creation of Factory Object 
const employeeFactory = new EmployeeFactory()

// Simple array to store the objects created by factory object
const employees=[]

// Adding Newly created factory objects
employees.push(employeeFactory.create("Patrick",1))
employees.push(employeeFactory.create("Patrick",1))
employees.push(employeeFactory.create("Patrick",1))
employees.push(employeeFactory.create("Patrick",1))
employees.push(employeeFactory.create("Patrick",1))


// Calling say funcions for all objects
employees.forEach((emp)=>{
    say.call(emp)
})