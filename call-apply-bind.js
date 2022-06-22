// call(), apply() and bind() methods are used to call a function along with some refernece to a object.
// Suppose we are having some function that is using this keyword, so binding that this keyword to reference is done by these methods.

let person1={
    firstName:"Pawan",
    lastName:"Kashyap"
}
//here this function is having this keyword
function printFullName(city,state,country){
    console.log(this.firstName+" "+this.lastName+" from " + city+", "+state+", ",country);
}
//Here the first parameter of the call() will be the refernce to the this keyword
// and rest parameters will be passed as an argument to the printFullName function
printFullName.call(person1,"Yamunanagar","Haryana","India")

//In apply() we pass the arguments of the function as an array
printFullName.apply(person1,["Yamunanagar","Haryana","India"])


//bind() will return us a function bound with the refernce object and we can call this function on a later stage
let boundedPrintName=printFullName.bind(person1,"Yamunanagar","Haryana","India")
boundedPrintName()
